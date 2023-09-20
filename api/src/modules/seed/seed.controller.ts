import { Controller, Post } from '@nestjs/common';

import { SeedService } from './seed.service';

import { errorResponse, successResponse } from 'src/core/util';

@Controller('seed')
export class SeedController {
  constructor(private service: SeedService) {}

  @Post()
  async seedData() {
    try {
      const data = await this.service.seedData();
      return successResponse(data);
    } catch (error) {
      return errorResponse(error);
    }
  }
}
