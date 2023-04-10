import {
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
    UnauthorizedException
} from "@nestjs/common";
import {Observable} from "rxjs";
import {JwtService} from "@nestjs/jwt";
import {ROLES_KEY} from "../Interface/roles-auth.decorator";
import {Reflector} from "@nestjs/core";

@Injectable()
export class RolesAuthGuard implements CanActivate{
    constructor(private jwtService: JwtService, private reflector: Reflector) {
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        try {
            const requireRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
                context.getHandler(),
                context.getClass(),
            ])
            if (!requireRoles) {
                return true
            }

            const req = context.switchToHttp().getRequest();
            const authHeader = req.headers.authorization;
            const bearer = authHeader.split(' ')[0];
            const token = authHeader.split(' ')[1];

            if (bearer !=='Bearer' || !token){
                console.log(bearer, 'Bearer', token, 'everybody')
                throw new UnauthorizedException({message: 'User is unauthorized (bearer !== "Bearer" || token)'});
            }

            const user = this.jwtService.verify(token);
            req.user = user;
            return user.roles.some(role => requireRoles.includes(role.value));

        }catch (e) {
            console.log(e)
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
    }
}