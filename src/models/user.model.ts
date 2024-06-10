import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
    @Column
    name: string;

    @Column
    role: 'candidate' | 'reviewer';

    @Column
    password: string;
}
