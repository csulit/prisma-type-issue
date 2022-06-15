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

  // Return -> Promise<{}[]>
  async getUserCase1() {
    const users = await this.prisma.user.findMany({ select: this.userSelect });

    return users;
  }

  // Return -> Promise<{id: string; name: string; email: string;}[]>
  async getUserCase2() {
    const users = await this.prisma.user.findMany({
      select: { id: true, name: true, email: true },
    });

    return users;
  }
}
