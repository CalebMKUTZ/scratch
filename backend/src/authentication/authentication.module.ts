import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AuthenticationService } from './authentication.service';

@Module({
  providers: [AuthenticationService, PrismaService],
})
export class AuthenticationModule {}
