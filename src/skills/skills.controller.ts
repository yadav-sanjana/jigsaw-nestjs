import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('skills')
export class SkillsController {
    constructor(private readonly skillsService: SkillsService) { }

    @UseGuards(JwtAuthGuard)
    @Get(':candidateId')
    async getAggregatedSkills(@Param('candidateId') candidateId: number) {
        return this.skillsService.getAggregatedSkills(candidateId);
    }
}
