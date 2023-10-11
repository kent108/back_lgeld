import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ajoute le préfixe api à l'adresse localhost:3000
  app.setGlobalPrefix(`api`);

  // ajoute la validation des données
  app.useGlobalPipes(new ValidationPipe());

// ajoute la documentation swagger
  const config = new DocumentBuilder()
    .setTitle('Les Goûts et Les Douceurs')
    .setDescription('LGELD API description')
    .setVersion('1.0')
    .addTag('LGELD')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  // autorise les requêtes venant du front
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
