import { Repository } from 'typeorm';
import { Teacher } from './entities/teacher.entity';
import { CityService } from 'src/city/city.service';
import { SubjectService } from 'src/subject/subject.service';
import { SchoolService } from 'src/school/school.service';
export declare class TeacherService {
    private readonly teacherRepository;
    private readonly cityService;
    private readonly subjectService;
    private readonly schoolService;
    private teachers;
    constructor(teacherRepository: Repository<Teacher>, cityService: CityService, subjectService: SubjectService, schoolService: SchoolService);
    getAll(): Promise<Teacher[]>;
    getById(id: number): Promise<Teacher>;
    add(data: any): Promise<string>;
    delete(id: number): Promise<string>;
    update(id: number, data: any): Promise<string>;
    private existsTeacher;
    private existsTeacherByDni;
}
