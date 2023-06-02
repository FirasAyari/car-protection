import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { AccidentDetail } from '../entities/accident-detail.entity';
import { AccidentEvent } from 'src/entities/accident-event.entity';
import { Client } from 'src/entities/client.entity';
import { ThirdParty } from 'src/entities/third-party.entity';
import { ClientService } from './client.service';
import { ThirdPartyService } from './third-party.service';
import { CarService } from 'src/services/car.service';

interface AccidentDetailInterface {
    accidentEvent: AccidentEvent;
    client: Client;
    thirdParty: ThirdParty;
}

@Injectable()
export class AccidentDetailService {    

  constructor(
    @InjectRepository(AccidentDetail)
    private readonly customAccidentDetailRepository: Repository<AccidentDetail>,
    private readonly clientService: ClientService,
        private readonly thirdPartyService: ThirdPartyService,
       // private readonly accidentDetailInterface: AccidentDetailInterface,
        private readonly carService: CarService,
  ) 
  { }
  private accidentDetail: AccidentDetail;
  private client: Client;
  private thirdParty: ThirdParty;

  
  async findById(id: number): Promise<AccidentDetail> {
    const accidentDetail = await this.customAccidentDetailRepository.findOneBy({ id: id });
    return accidentDetail;
  }


  findAll(): Promise<AccidentDetail[]> {
    return this.customAccidentDetailRepository.find();
  }

  save(event: AccidentDetail): Promise<AccidentDetail> {
    const accident = this.customAccidentDetailRepository.create(event);
  
    // TODO:validate if the clients already exists
    if (!Array.isArray(accident.clients) || accident.clients.length === 0) {
        throw new NotFoundException("Client field is empty");
      }    
      // Check if each client exists by ID
      accident.clients.forEach(async (client) => {
        const foundClient = await this.clientService.findById(client.id);
        if (!foundClient) {
          throw new NotFoundException(`Client with ID ${client.id} does not exist`);
        }
      });       
      this.carService.save(accident.car);
       // Validate if the third parties empty exist
  if (!Array.isArray(accident.thirdParty) || accident.thirdParty.length === 0) {
    throw new NotFoundException("Third party empty");
  }
// Check if each third party exists in the client table by CPF number
accident.thirdParty.forEach(async (thirdParty) => {   
      this.thirdPartyService.save(thirdParty);
    
  });

  


    //if the accident doenst exist, create a new one. Else, return null
    if(!event){
      const accidentDetail = this.customAccidentDetailRepository.create(event);
      return this.customAccidentDetailRepository.save(accidentDetail);
      }
    else{
      return null;
    }
  }


  async update(id: number, event: AccidentDetail): Promise<AccidentDetail> {
    const AccidentDetailToUpdate = await this.findById(id);   
    if (!AccidentDetailToUpdate) throw new NotFoundException("Accident not found");
    this.customAccidentDetailRepository.update(id, event);
    return;
  }

  async delete(id: number) {
    const accidentDetail = await this.findById(id);
    if (accidentDetail) this.customAccidentDetailRepository.delete(accidentDetail.id);
  }
}
