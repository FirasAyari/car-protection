import { Controller, Post, Req } from '@nestjs/common';
import { AccidentDetail } from 'src/entities/accident-detail.entity';
import { Car } from 'src/entities/car.entity';
import { Client } from 'src/entities/client.entity';
import { ThirdParty } from 'src/entities/third-party.entity';
import { AccidentService } from 'src/services/accident-service.service';
import { CarService } from 'src/services/car.service';
import { ClientService } from 'src/services/client.service';
import { ThirdPartyService } from 'src/services/third-party.service';
import { AccidentDetailService } from 'src/services/accident-detail.service';



@Controller('/accident-detail-full-controller')
export class AccidentDetailController   {
    constructor(
        private readonly accidentService: AccidentDetailService,
       

    ) { }
    private accidentEvent: AccidentDetail;
    

    @Post('/post')
    async CreateAccident(@Req() req: Request): Promise<AccidentDetail> {
      const body: any = req.body;   
      return await this.accidentService.save(body);
    }
}
