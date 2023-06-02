import { Test, TestingModule } from '@nestjs/testing';
import { AccidentDetailController } from '../../src/controllers/accident-detail.controller';

describe('AccidentEventFullControllerController', () => {
  let controller: AccidentDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccidentDetailController],
    }).compile();

    controller = module.get<AccidentDetailController>(AccidentDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
