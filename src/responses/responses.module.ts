import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ResponsesService } from './responses.service';
import { ResponsesController } from './responses.controller';
import { QuestionResponse } from 'src/models/responses.model';

@Module({
  imports: [SequelizeModule.forFeature([QuestionResponse])],
  providers: [ResponsesService],
  controllers: [ResponsesController],
})
export class ResponsesModule { }
