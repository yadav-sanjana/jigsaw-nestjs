import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/common/dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Post('signup')
  async signUp(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: CreateUserDto) {
    this.usersService.update(id, updateUserDto);
    return updateUserDto
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    this.usersService.remove(id);
    return "User Removed"
  }
}
