import { School } from "src/school/entities/school.entity";
import { Teacher } from "src/teacher/entities/teacher.entity";
export declare class City {
    private idCity;
    private name;
    schools: School[];
    teachers: Teacher[];
    students: School[];
    constructor(name: string);
    getIdCity(): number;
    setIdCity(idCity: number): void;
    getName(): string;
    setName(name: string): void;
}
