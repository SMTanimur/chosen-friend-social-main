import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';


@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const req = context.switchToHttp().getRequest();

    console.log('req.user', req.user);

    return true;
  }
}
