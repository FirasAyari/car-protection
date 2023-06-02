import { Client } from '../entities/client.entity';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(Client)
export class CustomClientRepository extends Repository<Client> {
    async findClientById(id: number): Promise<Client> {
        const client = await this.findOne({ where: { id: id } });
    
        return client;
    }
}