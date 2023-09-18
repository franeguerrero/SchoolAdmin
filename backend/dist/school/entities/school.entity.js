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
exports.School = void 0;
const city_entity_1 = require("../../city/entities/city.entity");
const subject_entity_1 = require("../../subject/entities/subject.entity");
const teacher_entity_1 = require("../../teacher/entities/teacher.entity");
const typeorm_1 = require("typeorm");
let School = class School {
    constructor(name, address, city) {
        this.name = name;
        this.address = address;
        this.city = city;
    }
    getIdSchool() { return this.idSchool; }
    setIdSchool(idSchool) { this.idSchool = idSchool; }
    getName() { return this.name; }
    setName(name) { this.name = name; }
    getAddress() { return this.address; }
    setAddress(address) { this.address = address; }
    getCity() { return this.city; }
    setCity(city) { this.city = city; }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], School.prototype, "idSchool", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], School.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], School.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => city_entity_1.City, city => city.schools),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", city_entity_1.City)
], School.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => teacher_entity_1.Teacher, teacher => teacher.school),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], School.prototype, "teachers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => subject_entity_1.Subject, subjects => subjects.school),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], School.prototype, "subjects", void 0);
School = __decorate([
    (0, typeorm_1.Entity)('school'),
    __metadata("design:paramtypes", [String, String, city_entity_1.City])
], School);
exports.School = School;
//# sourceMappingURL=school.entity.js.map