import { Module } from '@nestjs/common';
import { FormatsService } from './formats.service';
import { FormatsController } from './formats.controller';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Format } from './entities/format.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Format])],
  controllers: [FormatsController],
  providers: [FormatsService],
})
export class FormatsModule {}
