import { AccidentEvent } from '../entities/accident-event.entity';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(AccidentEvent)
export class CustomAccidentEventRepository extends Repository<AccidentEvent> {
    async findAccidentEventById(id: number): Promise<AccidentEvent> {
        const accidentEvent = await this.findOne({ where: { id: id } });

        return accidentEvent;
    }
}