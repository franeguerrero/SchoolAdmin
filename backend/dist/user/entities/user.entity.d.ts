import { Role } from '../../common/enum/rol.enum';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: Role;
    deletedAt: Date;
}
