import { Repository } from 'typeorm';
import { SubjectDTO } from './dto/subject.dto';
import { Subject } from './entities/subject.entity';
export declare class SubjectService {
    private readonly subjectRepository;
    private subjects;
    constructor(subjectRepository: Repository<Subject>);
    getAll(): Promise<Subject[]>;
    getById(id: number): Promise<Subject>;
    add(data: SubjectDTO): Promise<string>;
    delete(id: number): Promise<string>;
    update(id: number, data: SubjectDTO): Promise<string>;
    private subjectExists;
    private subjectExistsByName;
}
