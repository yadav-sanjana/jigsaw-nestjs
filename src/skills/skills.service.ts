import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { QuestionResponse } from 'src/models/responses.model';

@Injectable()
export class SkillsService {
    constructor(
        @InjectModel(QuestionResponse)
        private responseModel: typeof QuestionResponse,
    ) { }

    async getAggregatedSkills(candidateId: number) {
        const responses = await this.responseModel.findAll({ where: { candidateId } });
        const skillRatings = {};

        responses.forEach(response => {
            if (!skillRatings[response.skillId]) {
                skillRatings[response.skillId] = { total: 0, weight: 0 };
            }

            const weight = this.getWeight(response.difficulty_level);
            skillRatings[response.skillId].total += weight * response.rating;
            skillRatings[response.skillId].weight += weight;
        });

        return Object.keys(skillRatings).map(skillId => ({
            skillId: Number(skillId),
            rating: skillRatings[skillId].total / skillRatings[skillId].weight,
        }));
    }

    getWeight(difficulty: 'easy' | 'medium' | 'hard') {
        switch (difficulty) {
            case 'easy':
                return 1;
            case 'medium':
                return 2;
            case 'hard':
                return 3;
        }
    }
}
