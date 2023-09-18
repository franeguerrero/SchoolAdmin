import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
import { RegisterDTO } from './dto/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDTO: RegisterDTO): Promise<import("../user/dto/user.dto").UserDTO & import("../user/entities/user.entity").User>;
    login(loginDTO: LoginDTO): Promise<{
        access_token: string;
        email: string;
    }>;
}
