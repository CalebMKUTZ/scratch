import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { PadService } from './pad.service';
import { ScratchPad as PadModel } from '@prisma/client';
import { User as UserModel } from '@prisma/client';
import { Todo as TodoModel } from '@prisma/client';
import { AuthenticationService } from './authentication/authentication.service';
import { TodosService } from './todos/todos.service';

@Controller()
export class AppController {
  constructor(
    private readonly padService: PadService,
    private authenticationService: AuthenticationService,
    private todosService: TodosService,
  ) {}

  @Get('pad/:id')
  async getPadById(@Param('id') id: string): Promise<PadModel> {
    return this.padService.pad(Number(id));
  }

  @Get('pads/:email')
  async getPads(@Param('email') email: string): Promise<PadModel[]> {
    return this.padService.pads(email);
  }

  @Post('pad')
  async createPad(
    @Body() padData: { content: string; userEmail: string },
  ): Promise<PadModel> {
    const { content, userEmail } = padData;
    return this.padService.createPad(content, userEmail);
  }

  @Delete('pad/:id')
  async deletePad(@Param('id') id: string): Promise<PadModel> {
    return this.padService.deletePad(Number(id));
  }

  @Post('auth/user')
  async saveUser(@Body() userData: { email: string }): Promise<UserModel> {
    const { email } = userData;
    return this.authenticationService.saveUser(email);
  }

  @Get('auth/user/:email')
  async getUser(@Param('email') email: string): Promise<UserModel> {
    return this.authenticationService.getUser(email);
  }

  @Get('todos/:email')
  async getTodos(@Param('email') email: string): Promise<TodoModel[]> {
    return this.todosService.getAllTodos(email);
  }

  @Get('todo/:id')
  async getSingleTodo(@Param('id') id: string): Promise<TodoModel> {
    return this.todosService.getSingleTodo(Number(id));
  }

  @Post('todo')
  async createTodo(
    @Body() todoData: { name: string; userEmail: string, isChecked: boolean },
  ): Promise<TodoModel> {
    const { name, userEmail, isChecked } = todoData;
    return this.todosService.createTodo(name, userEmail, isChecked);
  }

  @Delete('todo/:id')
  async deleteTodo(@Param('id') id: string): Promise<TodoModel> {
    return this.todosService.deleteTodo(Number(id));
  }
}
