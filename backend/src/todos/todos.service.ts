import { Injectable } from '@nestjs/common';
import { prisma, Todo } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TodosService {
  constructor(private readonly prismaService: PrismaService) {}

  getAllTodos(email: string): Promise<Todo[] | null> {
    return this.prismaService.todo.findMany({
      where: {
        userEmail: email,
        isChecked: false,
      },
    });
  }

  getSingleTodo(id: number): Promise<Todo> {
    return this.prismaService.todo.findFirst({
      where: { id: id, isChecked: false },
    });
  }

  createTodo(name: string, userEmail: string, isChecked): Promise<Todo> {
    return this.prismaService.todo.create({
      data: {
        name,
        userEmail,
        isChecked: isChecked,
      },
    });
  }

  async deleteTodo(id: number): Promise<Todo> {
    return this.prismaService.todo.delete({
      where: { id: id },
    });
  }
}
