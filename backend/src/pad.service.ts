import { Injectable } from '@nestjs/common';
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

  async pads(email: string): Promise<ScratchPad[]> {
    return this.prisma.scratchPad.findMany({ where: { userEmail: email } });
  }

  async createPad(content: string, userEmail: string): Promise<ScratchPad> {
    return this.prisma.scratchPad.create({
      data: {
        content,
        userEmail,
      },
      select: {
        userEmail: true,
        id: true,
        content: true,
      },
    });
  }

  async deletePad(id: number): Promise<ScratchPad> {
    return this.prisma.scratchPad.delete({
      where: { id: id },
    });
  }
}
