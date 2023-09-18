import { UserService } from './../user/user.service';
import { LoginDTO } from './dto/login.dto';
import { RegisterDTO } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    register({ name, email, password }: RegisterDTO): Promise<import("../user/dto/user.dto").UserDTO & import("../user/entities/user.entity").User>;
    login({ email, password }: LoginDTO): Promise<{
        access_token: string;
        email: string;
    }>;
}
