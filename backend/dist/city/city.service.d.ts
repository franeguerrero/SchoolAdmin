import { Repository } from 'typeorm';
import { CityDTO } from './dto/city.dto';
import { City } from './entities/city.entity';
export declare class CityService {
    private readonly cityRepository;
    private cities;
    constructor(cityRepository: Repository<City>);
    getAll(): Promise<City[]>;
    getById(id: number): Promise<City>;
    add(data: CityDTO): Promise<string>;
    delete(id: number): Promise<string>;
    update(id: number, data: CityDTO): Promise<string>;
    private cityExists;
    private cityExistsByName;
}
