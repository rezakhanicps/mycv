import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

var session = require('express-session')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(session({secret: 'nest'}))
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
