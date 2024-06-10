import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/models/user.model';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) { }

  async signPayload(payload: any): Promise<string> {
    return this.jwtService.sign(payload);
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await User.findOne({ where: { name: username } });
    if (user && bcrypt.compareSync(pass, user.password)) {
      const { password, ...result } = user.toJSON();
      return result;
    }
    return null;
  }
}
