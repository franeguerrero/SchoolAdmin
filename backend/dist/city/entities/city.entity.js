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
exports.City = void 0;
const school_entity_1 = require("../../school/entities/school.entity");
const student_entity_1 = require("../../student/entities/student.entity");
const teacher_entity_1 = require("../../teacher/entities/teacher.entity");
const typeorm_1 = require("typeorm");
let City = class City {
    constructor(name) {
        this.name = name;
    }
    getIdCity() { return this.idCity; }
    setIdCity(idCity) { this.idCity = idCity; }
    getName() { return this.name; }
    setName(name) { this.name = name; }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], City.prototype, "idCity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], City.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => school_entity_1.School, school => school.city),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], City.prototype, "schools", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => teacher_entity_1.Teacher, teacher => teacher.city),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], City.prototype, "teachers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => student_entity_1.Student, student => student.city),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], City.prototype, "students", void 0);
City = __decorate([
    (0, typeorm_1.Entity)('city'),
    __metadata("design:paramtypes", [String])
], City);
exports.City = City;
//# sourceMappingURL=city.entity.js.map