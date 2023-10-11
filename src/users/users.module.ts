import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Type } from 'src/types/entities/type.entity';
import { Price } from 'src/prices/entities/price.entity';
import { Picture } from 'src/pictures/entities/picture.entity';
import { Format } from 'src/formats/entities/format.entity';
import { Article } from 'src/articles/entities/article.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Type, Price, Picture, Format, Article ])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
