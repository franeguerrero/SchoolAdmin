import { School } from "src/school/entities/school.entity";
import { Teacher } from "src/teacher/entities/teacher.entity";
export declare class Subject {
    private idSubject;
    private name;
    school: School;
    teacher: Teacher;
    constructor(name: string);
    getIdSubject(): number;
    getName(): string;
    setName(name: string): void;
    getSchool(): School;
    setSchool(school: School): void;
}
