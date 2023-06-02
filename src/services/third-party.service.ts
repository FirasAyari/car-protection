import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ThirdParty } from 'src/entities/third-party.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ThirdPartyService {
  constructor(
    @InjectRepository(ThirdParty)
    private readonly customThirdPartyRepository: Repository<ThirdParty>,
  ) { }

  async findById(id: number): Promise<ThirdParty> {
    const thirdParty = await this.customThirdPartyRepository.findOneBy({ id: id });
    return thirdParty;
  }

  save(event: ThirdParty): Promise<ThirdParty> {
    const thirdParty = this.customThirdPartyRepository.create(event);
    return this.customThirdPartyRepository.save(thirdParty);
  }
  async findByCpf(cpf: string): Promise<ThirdParty> {
    const client = await this.customThirdPartyRepository.findOne({ where: { cpf } });
    if (!client) {
      console.log(`thirtdparty with CPF ${cpf} not found`);
    }
    return client;
  }

  async update(id: number, event: ThirdParty): Promise<ThirdParty> {
    const thirdPartyToUpdate = await this.findById(id);
    if (!thirdPartyToUpdate) throw new NotFoundException("Client not found");
    this.customThirdPartyRepository.update(id, event);
    return;
  }

  async delete(id: number) {

    const thirdParty = await this.findById(id)
    if (thirdParty) this.customThirdPartyRepository.delete(thirdParty.id)
  }

}
