import { Test, TestingModule } from '@nestjs/testing';
import { AccidentServiceService } from './accident-service.service';

describe('AccidentServiceService', () => {
  let service: AccidentServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccidentServiceService],
    }).compile();

    service = module.get<AccidentServiceService>(AccidentServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
