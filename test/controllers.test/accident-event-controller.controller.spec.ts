import { Test, TestingModule } from '@nestjs/testing';
import AccidentEventControllerController from '../../src/controllers/accident-event.controller';

describe('AccidentEventControllerController', () => {
  let controller: AccidentEventControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccidentEventControllerController],
    }).compile();

    controller = module.get<AccidentEventControllerController>(AccidentEventControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
