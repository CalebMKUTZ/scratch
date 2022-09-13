import { Injectable, Req } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ScratchPad } from '@prisma/client';

@Injectable()
export class PadService {
  constructor(private prisma: PrismaService) {}

  async pad(id: number): Promise<ScratchPad | null> {
    return this.prisma.scratchPad.findUnique({
      where: { id: id },
    });
  }

  async pads(): Promise<ScratchPad[]> {
    return this.prisma.scratchPad.findMany({});
  }

  async createPad(content: string): Promise<ScratchPad> {
    return this.prisma.scratchPad.create({
      data: {
        content,
      },
    });
  }

  async deletePad(id: number): Promise<ScratchPad> {
    return this.prisma.scratchPad.delete({
      where: { id: id },
    });
  }
}
