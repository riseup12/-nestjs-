import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  //开启验证 ，使用全局管道
  app.useGlobalPipes(new ValidationPipe)
  const options = new DocumentBuilder()
    .setTitle('nestjs博客API')
    .setDescription('我的第一个nestjs项目')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api-docs', app, document)

  await app.listen(3000);
}
bootstrap();
