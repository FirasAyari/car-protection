import { ThirdParty } from '../entities/third-party.entity';
import { Repository, EntityRepository } from 'typeorm';


@EntityRepository(ThirdParty)
export class CustomThirdPartyRepository extends Repository<ThirdParty> {
    async findThirdPartyById(id: number): Promise<ThirdParty> {
        const thirdParty = await this.findOne({ where: { id: id } });
        return thirdParty;
    }
}