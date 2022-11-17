import {
  BadRequestException,
  Injectable,

} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  handleRequest(err, user, info, context) {
    const request = context.switchToHttp().getRequest();
    const { email, password } = request.body;
    if (err || !user) {
      if (!email) {
        throw new BadRequestException('Email is required');
      } else if (!password) {
        throw new BadRequestException('Password is required');
      } else {
        throw new BadRequestException('Wrong email or password');
        // throw err || new UnauthorizedException();
      }
    }
    return user;
  }
}
