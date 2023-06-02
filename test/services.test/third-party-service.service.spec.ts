import { Test, TestingModule } from '@nestjs/testing';
import { ThirdPartyService } from '../../src/services/third-party.service';

describe('ThirdPartyServiceService', () => {
  let service: ThirdPartyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThirdPartyService],
    }).compile();

    service = module.get<ThirdPartyService>(ThirdPartyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
