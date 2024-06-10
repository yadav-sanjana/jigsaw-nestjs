import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SkillsController } from './skills.controller';
import { SkillsService } from './skills.service';
import { QuestionResponse } from 'src/models/responses.model';

@Module({
    imports: [SequelizeModule.forFeature([QuestionResponse])],
    controllers: [SkillsController],
    providers: [SkillsService],
})
export class SkillsModule { }
