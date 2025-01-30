import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const apiPath = 'api';
  app.setGlobalPrefix(apiPath);

  // Swagger Options
  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Nest-js Swagger Example API')
    .setDescription('Swagger Example API API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup(`${apiPath}/docs`, app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
