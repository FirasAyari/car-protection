import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from '@nestjs/common';
import Decimal from 'decimal.js';
import { Client } from 'src/entities/client.entity';
import { ClientService } from 'src/services/client.service';


interface CreateClientRequest {
  phoneNumber: string;
  contractNumbers: number;
  value: Decimal;
  accidentRecord: boolean;
  name: string;
  cpf: string;
  address: string;
  birthday: Date;
}



@Controller('/client')
export default class ClientController {
  constructor(
    private readonly clientService: ClientService
  ) { }

  @Get('/get/:clientId')
  async getClient(@Param('clientId') clientId: number): Promise<Client | undefined> {
    return await this.clientService.findById(clientId);
  }

@Get('/get-all')
async getAllClients(): Promise<Client[]> {
  return await this.clientService.findAll(); // Assuming you have a method named `findAll` in the `ClientService` to retrieve all clients
}


  @Post('/post')
  async createClient(@Req() req: Request): Promise<Client> {
    const body: any = req.body;
    return await this.clientService.save(body);;
  }

  @Put('/put/:clientId')
  async updateClientById(@Param('clientId') clientId: number, @Req() req: Request): Promise<Client | undefined> {
    const body: any = req.body;
    return await this.clientService.update(clientId, body);
  }

  @Delete('/delete/:clientId')
  async remove(@Param('clientId') clientId: number) {
    await this.clientService.delete(clientId);

  }


}
