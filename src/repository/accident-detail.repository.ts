import { AccidentDetail } from '../entities/accident-detail.entity';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(AccidentDetail)
export class CustomAccidentDetailRepository extends Repository<AccidentDetail> {
    async findAccidentDetailById(id: number): Promise<AccidentDetail> {
        const accidentDetail = await this.findOne({ where: { id: id } });

        return accidentDetail;
    }
}