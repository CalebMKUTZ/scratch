import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthenticationService {
  constructor(private readonly prismaService: PrismaService) {}

  async saveUser(email: string): Promise<User> {
    return this.prismaService.user.create({
      data: {
        email,
      },
      include: {
        pads: true,
      },
    });
  }

  async getUser(email: string): Promise<User | null> {
    return this.prismaService.user.findUnique({
      where: { email: email },
      include: {
        pads: {
          where: {
            userEmail: email,
          },
        },
      },
    });
  }
}
