"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const teacher_controller_1 = require("./teacher.controller");
const teacher_entity_1 = require("./entities/teacher.entity");
const teacher_service_1 = require("./teacher.service");
const city_entity_1 = require("../city/entities/city.entity");
const city_service_1 = require("../city/city.service");
const subject_service_1 = require("../subject/subject.service");
const subject_entity_1 = require("../subject/entities/subject.entity");
const school_service_1 = require("../school/school.service");
const school_entity_1 = require("../school/entities/school.entity");
const student_entity_1 = require("../student/entities/student.entity");
const student_service_1 = require("../student/student.service");
let TeacherModule = class TeacherModule {
};
TeacherModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                teacher_entity_1.Teacher,
                city_entity_1.City,
                subject_entity_1.Subject,
                school_entity_1.School,
                student_entity_1.Student
            ])
        ],
        controllers: [teacher_controller_1.TeacherController],
        providers: [teacher_service_1.TeacherService, city_service_1.CityService, subject_service_1.SubjectService, school_service_1.SchoolService, student_service_1.StudentService]
    })
], TeacherModule);
exports.TeacherModule = TeacherModule;
//# sourceMappingURL=teacher.module.js.map