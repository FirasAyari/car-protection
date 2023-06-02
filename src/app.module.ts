import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
////Service imports
import { ClientService } from './services/client.service';
import { ThirdPartyService } from './services/third-party.service';
import { AccidentService } from './services/accident-service.service';
import { AccidentDetailService } from './services/accident-detail.service';
import { CarService } from './services/car.service';
///Entity imports
import { Client } from './entities/client.entity';
import { AccidentEvent } from './entities/accident-event.entity';
import { ThirdParty } from './entities/third-party.entity';
import { AccidentDetail } from './entities/accident-detail.entity';
import { Car } from './entities/car.entity';
///Repository imports
import { CustomClientRepository } from './repository/client.repository';
import { CustomAccidentEventRepository } from './repository/accident-event.repository';
import { CustomThirdPartyRepository } from './repository/thirdParty.repository';
import { CustomAccidentDetailRepository } from './repository/accident-detail.repository';
import { CustomCarRepository } from './repository/car.repository';

///Controllers imports
import ClientController from './controllers/client.controller';
import AccidentEventController from './controllers/accident-event.controller';
import ThirdPartyController from './controllers/third-party.controller';
import { AccidentDetailController } from './controllers/accident-detail.controller';
import CarController from './controllers/car.controller';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'protect-car',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([AccidentEvent, CustomAccidentEventRepository, Client,Car, CustomClientRepository, ThirdParty, CustomThirdPartyRepository,AccidentDetail, CustomAccidentDetailRepository,CustomCarRepository]),],
  controllers: [ClientController, AccidentEventController, ThirdPartyController, AccidentDetailController,CarController],
  providers: [ ClientService, AccidentService,ThirdPartyService, AccidentDetailService,CarService],
})
export class AppModule { }
