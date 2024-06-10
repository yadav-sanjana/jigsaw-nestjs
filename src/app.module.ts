import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { User } from './models/user.model';
import { UsersModule } from './users/users.module';
import { QuestionResponse } from './models/responses.model';
import { ResponsesModule } from './responses/responses.module';
import { AuthModule } from './auth/auth.module';
import { SkillsModule } from './skills/skills.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'jigsaw_db',
      autoLoadModels: true,
      synchronize: true,
      models: [User, QuestionResponse]
    }),
    UsersModule,
    ResponsesModule,
    SkillsModule,
    AuthModule,
  ],
})
export class AppModule { }
