import { Module } from '@nestjs/common';
import { Vision1Service } from './vision1.service';
import { Vision1Controller } from './vision1.controller';

@Module({
  controllers: [Vision1Controller],
  providers: [Vision1Service],
})
export class Vision1Module {}
