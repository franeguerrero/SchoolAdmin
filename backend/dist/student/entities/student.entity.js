"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const typeorm_1 = require("typeorm");
const city_entity_1 = require("../../city/entities/city.entity");
const teacher_entity_1 = require("../../teacher/entities/teacher.entity");
let Student = class Student {
    constructor(fullName, birth, dni, address, city, teachers) {
        this.fullName = fullName;
        this.birth = birth;
        this.dni = dni;
        this.address = address;
        this.city = city;
        this.teachers = teachers;
    }
    getIdStudent() { return this.idStudent; }
    setIdStudent(idStudent) { this.idStudent = idStudent; }
    getFullName() { return this.fullName; }
    setFullName(fullName) { this.fullName = fullName; }
    getBirth() { return this.birth; }
    setBirth(birth) { this.birth = birth; }
    getDniStudent() { return this.dni; }
    setDniStudent(dni) { this.dni = dni; }
    getAddress() { return this.address; }
    setAddress(address) { this.address = address; }
    getCity() { return this.city; }
    setCity(city) { this.city = city; }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Student.prototype, "idStudent", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Student.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Student.prototype, "birth", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Student.prototype, "dni", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Student.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => city_entity_1.City, city => city.students),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", city_entity_1.City)
], Student.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(type => teacher_entity_1.Teacher, (teacher) => teacher.students),
    (0, typeorm_1.JoinTable)({
        name: 'teacher_student',
        joinColumn: {
            name: 'studentIdStudent',
            referencedColumnName: 'idStudent'
        },
        inverseJoinColumn: {
            name: 'teacherIdTeacher',
            referencedColumnName: 'idTeacher'
        }
    }),
    __metadata("design:type", Array)
], Student.prototype, "teachers", void 0);
Student = __decorate([
    (0, typeorm_1.Entity)('student'),
    __metadata("design:paramtypes", [String, String, Number, String, city_entity_1.City, Array])
], Student);
exports.Student = Student;
//# sourceMappingURL=student.entity.js.map