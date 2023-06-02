import { Test, TestingModule } from '@nestjs/testing';
import  ThirdPartyController  from '../../src/controllers/third-party.controller';

describe('ThirdPartyControllerController', () => {
  let controller: ThirdPartyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThirdPartyController],
    }).compile();

    controller = module.get<ThirdPartyController>(ThirdPartyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
