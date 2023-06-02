import { Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { AccidentEvent } from 'src/entities/accident-event.entity';
import { AccidentService } from 'src/services/accident-service.service';

@Controller('/accident')
export default class AccidentEventControllerController {
  constructor(
    private readonly accidentService: AccidentService,
  ) { }

  @Get('/get')
  async getAccident(): Promise<AccidentEvent[]> {
    const accidentEvent = await this.accidentService.findAll();

    return accidentEvent;
  }

  @Get('/get/:accidentId')
  async getAccidentById(@Param('accidentId') accidentId: number): Promise<AccidentEvent | undefined> {
    const accidentEvent = await this.accidentService.findById(accidentId);
    return accidentEvent;
  }


  @Post('/post')
  async createAccident(@Req() req: Request): Promise<AccidentEvent> {
    const body: any = req.body;
    return await this.accidentService.save(body);;
  }



  @Put('/put/:id')
  async updateAccident(@Param('id') id: number, @Req() req: Request): Promise<AccidentEvent | undefined> {
    const body: any = req.body;
    return await this.accidentService.update(id, body);
  }


  @Delete('/delete/:id')
  async remove(@Param('id') id: number) {
    await this.accidentService.delete(id);

  }
}
