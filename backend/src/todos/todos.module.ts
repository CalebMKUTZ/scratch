import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TodosService } from './todos.service';

@Module({
  providers: [TodosService, PrismaService]
})
export class TodosModule {}
