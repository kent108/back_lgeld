import { Module } from '@nestjs/common';
import { PicturesService } from './pictures.service';
import { PicturesController } from './pictures.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Picture } from './entities/picture.entity';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forFeature([Picture]),
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [PicturesController],
  providers: [PicturesService],
})
export class PicturesModule {}
