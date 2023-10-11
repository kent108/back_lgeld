import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { PricesModule } from './prices/prices.module';
import { Price } from './prices/entities/price.entity';
import { FormatsModule } from './formats/formats.module';
import { ArticlesModule } from './articles/articles.module';
import { Article } from './articles/entities/article.entity';
import { Format } from './formats/entities/format.entity';
import { TypesModule } from './types/types.module';
import { Type } from './types/entities/type.entity';
import { PicturesModule } from './pictures/pictures.module';
import { Picture } from './pictures/entities/picture.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: [`.env`] }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [User, Price, Article, Format, Type, Picture],
      synchronize: false,
    }),
    UsersModule,
    PricesModule,
    FormatsModule,
    ArticlesModule,
    TypesModule,
    PicturesModule,
    AuthModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
