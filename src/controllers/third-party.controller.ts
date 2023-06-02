import { Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { ThirdParty } from 'src/entities/third-party.entity';
import { ThirdPartyService } from 'src/services/third-party.service';

@Controller('/thirdparty')
export default class ThirdPartyController {
  constructor(
    private readonly thirdPartyService: ThirdPartyService,
  ) { }

  @Get('/get/:id')
  async getThirdParty(@Param('id') id: number): Promise<ThirdParty | undefined> {
    const thirdParty = await this.thirdPartyService.findById(id);
    return thirdParty;
  }

  @Post('/post')
  async createThirdParty(@Req() req: Request): Promise<ThirdParty> {
    const body: any = req.body;
    return await this.thirdPartyService.save(body);
  }


  @Put('/put/:id')
  async updateThirdPartyById(@Param('id') id: number, @Req() req: Request): Promise<ThirdParty | undefined> {
    const body: any = req.body;
    return await this.thirdPartyService.update(id, body);
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: number) {
    await this.thirdPartyService.delete(id);
  }
}
