import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { AccidentEvent } from '../entities/accident-event.entity';

@Injectable()
export class AccidentService {
  constructor(
    @InjectRepository(AccidentEvent)
    private readonly customAccidentEventRepository: Repository<AccidentEvent>,
  ) { }

  async findById(id: number): Promise<AccidentEvent> {
    const accidentEvent = await this.customAccidentEventRepository.findOneBy({ id: id });
    return accidentEvent;
  }

  findAll(): Promise<AccidentEvent[]> {
    return this.customAccidentEventRepository.find();
  }

  save(event: AccidentEvent): Promise<AccidentEvent> {
    const accidentEvent = this.customAccidentEventRepository.create(event);
    return this.customAccidentEventRepository.save(accidentEvent);
  }


  async update(id: number, event: AccidentEvent): Promise<AccidentEvent> {
    const AccidentEventToUpdate = await this.findById(id);
    if (!AccidentEventToUpdate) throw new NotFoundException("Accident not found");
    this.customAccidentEventRepository.update(id, event);
    return;
  }

  async delete(id: number) {
    const accidentEvent = await this.findById(id);
    if (accidentEvent) this.customAccidentEventRepository.delete(accidentEvent.id);
  }
}
