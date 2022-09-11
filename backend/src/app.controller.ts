import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';
import { PadService } from './pad.service';
import { ScratchPad as PadModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly padService: PadService) {}

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
}
