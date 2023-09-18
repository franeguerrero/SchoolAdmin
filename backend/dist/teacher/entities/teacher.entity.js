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
exports.Teacher = void 0;
const city_entity_1 = require("../../city/entities/city.entity");
const school_entity_1 = require("../../school/entities/school.entity");
const student_entity_1 = require("../../student/entities/student.entity");
const subject_entity_1 = require("../../subject/entities/subject.entity");
const typeorm_1 = require("typeorm");
let Teacher = class Teacher {
    constructor(fullName, dni, address, city, subject, school) {
        this.fullName = fullName;
        this.dni = dni;
        this.address = address;
        this.city = city;
        this.subject = subject;
        this.school = school;
    }
    getIdTeacher() { return this.idTeacher; }
    getFullName() { return this.fullName; }
    setFullName(fullName) { this.fullName = fullName; }
    getDniTeacher() { return this.dni; }
    setDniTeacher(dni) { this.dni = dni; }
    getAddress() { return this.address; }
    setAddress(address) { this.address = address; }
    getCity() { return this.city; }
    setCity(city) { this.city = city; }
    getSubject() { return this.subject; }
    setSubject(subject) { this.subject = subject; }
    getSchool() { return this.school; }
    setSchool(school) { this.school = school; }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Teacher.prototype, "idTeacher", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Teacher.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Teacher.prototype, "dni", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Teacher.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => city_entity_1.City, city => city.teachers),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", city_entity_1.City)
], Teacher.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => school_entity_1.School, school => school.teachers),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", school_entity_1.School)
], Teacher.prototype, "school", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => subject_entity_1.Subject, subject => subject.teacher),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", subject_entity_1.Subject)
], Teacher.prototype, "subject", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(type => student_entity_1.Student, student => student.teachers),
    __metadata("design:type", student_entity_1.Student)
], Teacher.prototype, "students", void 0);
Teacher = __decorate([
    (0, typeorm_1.Entity)('teacher'),
    __metadata("design:paramtypes", [String, Number, String, city_entity_1.City, subject_entity_1.Subject, school_entity_1.School])
], Teacher);
exports.Teacher = Teacher;
//# sourceMappingURL=teacher.entity.js.map