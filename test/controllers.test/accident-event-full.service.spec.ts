import { Test, TestingModule } from '@nestjs/testing';
import { AccidentDetailService } from '../../src/services/accident-detail.service';

describe('AccidentEventFullService', () => {
  let service: AccidentDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccidentDetailService],
    }).compile();

    service = module.get<AccidentDetailService>(AccidentDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
