import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { CityService } from 'src/city/city.service';
import { Teacher } from 'src/teacher/entities/teacher.entity';
export declare class StudentService {
    private readonly studentRepository;
    private readonly cityService;
    private readonly teacherRepository;
    private students;
    constructor(studentRepository: Repository<Student>, cityService: CityService, teacherRepository: Repository<Teacher>);
    getAll(): Promise<Student[]>;
    getById(id: number): Promise<Student>;
    add(data: any): Promise<string>;
    delete(id: number): Promise<string>;
    update(id: number, data: any): Promise<string>;
    private studentExists;
    private studentExistsByDni;
}
