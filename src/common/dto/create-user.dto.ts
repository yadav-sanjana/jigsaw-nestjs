export class CreateUserDto {
  name: string;
  role: 'candidate' | 'reviewer';
  password: string;
}
