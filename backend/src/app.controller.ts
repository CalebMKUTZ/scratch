import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { PadService } from './pad.service';
import { ScratchPad as PadModel } from '@prisma/client';
import { User as UserModel } from '@prisma/client';
import { AuthenticationService } from './authentication/authentication.service';

@Controller()
export class AppController {
  constructor(
    private readonly padService: PadService,
    private authenticationService: AuthenticationService,
  ) {}

  @Get('pad/:id')
  async getPadById(@Param('id') id: string): Promise<PadModel> {
    return this.padService.pad(Number(id));
  }

  @Get('pads')
  async getPads(): Promise<PadModel[]> {
    return this.padService.pads();
  }

  @Post('pad')
  async createPad(@Body() padData: { content: string }): Promise<PadModel> {
    const { content } = padData;
    return this.padService.createPad(content);
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
}
