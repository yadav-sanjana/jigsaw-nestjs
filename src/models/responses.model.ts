import { Column, Model, Table, ForeignKey } from 'sequelize-typescript';
import { User } from './user.model';

@Table
export class QuestionResponse extends Model {
    @Column
    skillId: number;

    @Column
    difficulty_level: 'easy' | 'medium' | 'hard';

    @Column
    question: string;

    @Column
    response: string;

    @Column
    rating: number;

    @ForeignKey(() => User)
    @Column
    candidateId: number;

    @ForeignKey(() => User)
    @Column
    reviewerId: number;
}
