import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import * as passport from "@nestjs/passport";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  app.use(cors());

  await app.listen(3000);
}
bootstrap();
