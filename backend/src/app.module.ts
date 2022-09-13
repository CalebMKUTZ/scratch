import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PadService } from './pad.service';
import { PrismaService } from './prisma.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthenticationService } from './authentication/authentication.service';

@Module({
  controllers: [AppController],
  providers: [AppService, PadService, PrismaService, AuthenticationService],
  imports: [AuthenticationModule],
})
export class AppModule {}
