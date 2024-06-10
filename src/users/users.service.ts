import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from 'src/common/dto/create-user.dto';
import { User } from 'src/models/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    return this.userModel.create({
      name: createUserDto.name,
      role: createUserDto.role,
      password: hashedPassword,
    });
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(id: number): Promise<User> {
    return this.userModel.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: CreateUserDto): Promise<any> {
    return this.userModel.update(updateUserDto, {
      where: { id },
    });
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
