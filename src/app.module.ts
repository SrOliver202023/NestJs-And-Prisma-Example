import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { PostService } from './modules/post/post.service';
import { UserService } from './modules/user/user.service';

@Module({
  imports: [PrismaClient],
  controllers: [AppController],
  providers: [UserService, PostService, PrismaService],
})
export class AppModule {}
