import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from 'src/entities/car.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private readonly customCarRepository: Repository<Car>,
  ) { }

  async findById(id: number): Promise<Car> {
    const car = await this.customCarRepository.findOneBy({ id: id });
    return car;
  }

  save(event: Car): Promise<Car> {
    const car = this.customCarRepository.create(event);
    return this.customCarRepository.save(car);
  }
  async findAll(): Promise<Car[]> {
    return await this.customCarRepository.find();
  }
  async update(id: number, event: Car): Promise<Car> {
    const carToUpdate = await this.findById(id);
    if (!carToUpdate) throw new NotFoundException("car not found");    
    this.customCarRepository.update(id, event);
    return;   
  }

  async delete(carId: number) {

    const car = await this.findById(carId)
    if (car) this.customCarRepository.delete(car.id)
  }

}
