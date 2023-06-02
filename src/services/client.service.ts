import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/entities/client.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ThirdPartyService } from './third-party.service';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly customClientRepository: Repository<Client>,
    private readonly thirdPartyService: ThirdPartyService,
  ) { }

  async findById(id: number): Promise<Client> {
    const client = await this.customClientRepository.findOneBy({ id: id });
    return client;
  }

  async findAll(): Promise<Client[]> {
    return await this.customClientRepository.find();
  }   

  save(event: Client): Promise<Client> {
    const client = this.customClientRepository.create(event);
    const clientExist =  this.thirdPartyService.findByCpf(client.cpf);    
if(clientExist){
  client.accidentRecord = true ;
}

    return this.customClientRepository.save(client);
  }

  async update(id: number, event: Client): Promise<Client> {
    const clientToUpdate = await this.findById(id);    
    if (!clientToUpdate) throw new NotFoundException("Client not found");
    //if(this.customClientRepository.update(id, event))
    this.customClientRepository.update(id, event);
    return;
    //return this.customClientRepository.save(event);
  }

  async delete(clientId: number) {

    const client = await this.findById(clientId)    
    if (client) this.customClientRepository.delete(client.id)
  }

}
