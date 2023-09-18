import { City } from "src/city/entities/city.entity";
import { School } from "src/school/entities/school.entity";
import { Student } from "src/student/entities/student.entity";
import { Subject } from "src/subject/entities/subject.entity";
export declare class Teacher {
    private idTeacher;
    private fullName;
    private dni;
    private address;
    city: City;
    school: School;
    subject: Subject;
    students: Student;
    constructor(fullName: string, dni: number, address: string, city: City, subject: Subject, school: School);
    getIdTeacher(): number;
    getFullName(): string;
    setFullName(fullName: string): void;
    getDniTeacher(): number;
    setDniTeacher(dni: number): void;
    getAddress(): string;
    setAddress(address: string): void;
    getCity(): City;
    setCity(city: City): void;
    getSubject(): Subject;
    setSubject(subject: Subject): void;
    getSchool(): School;
    setSchool(school: School): void;
}
