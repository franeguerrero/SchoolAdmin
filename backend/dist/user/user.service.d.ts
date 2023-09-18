import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './dto/user.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(userDTO: UserDTO): Promise<UserDTO & User>;
    findAll(): Promise<User[]>;
    findOneByEmail(email: string): Promise<User>;
    findByEmailWithPassword(email: string): Promise<User>;
    findOne(id: number): string;
    remove(id: number): string;
}
