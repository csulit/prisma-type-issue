import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClientService } from './prisma-client/prisma-client.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const prismaClientService: PrismaClientService = app.get(PrismaClientService);

  prismaClientService.enableShutdownHooks(app);

  await app.listen(3000);
}
bootstrap();
