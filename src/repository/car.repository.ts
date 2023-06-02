import { Car } from '../entities/car.entity';
import { Repository, EntityRepository } from 'typeorm';


@EntityRepository(Car)
export class CustomCarRepository extends Repository<Car> {
    async findCarById(id: number): Promise<Car> {
        const car = await this.findOne({ where: { id: id } });
    
        return car;
    }
}