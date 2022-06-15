import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaClientService } from './prisma-client/prisma-client.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaClientService) {}
  userSelect: Prisma.UserSelect = {
    id: true,
    name: true,
    email: true,
  };

  async getUser() {
    const users = await this.prisma.user.findMany({ select: this.userSelect });

    return users;
  }
}
