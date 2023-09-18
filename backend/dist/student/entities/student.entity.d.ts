import { City } from "src/city/entities/city.entity";
import { Teacher } from "src/teacher/entities/teacher.entity";
export declare class Student {
    private idStudent;
    private fullName;
    private birth;
    private dni;
    private address;
    city: City;
    teachers: Teacher[];
    constructor(fullName: string, birth: string, dni: number, address: string, city: City, teachers: Teacher[]);
    getIdStudent(): number;
    setIdStudent(idStudent: number): void;
    getFullName(): string;
    setFullName(fullName: string): void;
    getBirth(): string;
    setBirth(birth: string): void;
    getDniStudent(): number;
    setDniStudent(dni: number): void;
    getAddress(): string;
    setAddress(address: string): void;
    getCity(): City;
    setCity(city: City): void;
}
