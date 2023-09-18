import { City } from "src/city/entities/city.entity";
import { Subject } from "src/subject/entities/subject.entity";
import { Teacher } from "src/teacher/entities/teacher.entity";
export declare class School {
    private idSchool;
    private name;
    private address;
    city: City;
    teachers: Teacher[];
    subjects: Subject[];
    constructor(name: string, address: string, city: City);
    getIdSchool(): number;
    setIdSchool(idSchool: number): void;
    getName(): string;
    setName(name: string): void;
    getAddress(): string;
    setAddress(address: string): void;
    getCity(): City;
    setCity(city: City): void;
}
