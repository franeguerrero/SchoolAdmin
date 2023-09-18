import { Repository } from 'typeorm';
import { School } from './entities/school.entity';
import { CityService } from 'src/city/city.service';
export declare class SchoolService {
    private readonly schoolRepository;
    private readonly cityService;
    private schools;
    constructor(schoolRepository: Repository<School>, cityService: CityService);
    getAll(): Promise<School[]>;
    getById(id: number): Promise<School>;
    add(data: any): Promise<string>;
    delete(id: number): Promise<string>;
    update(id: number, data: any): Promise<string>;
    private schoolExists;
    private schoolExistsByData;
}
