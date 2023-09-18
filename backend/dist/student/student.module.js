"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModule = void 0;
const common_1 = require("@nestjs/common");
const student_service_1 = require("./student.service");
const student_controller_1 = require("./student.controller");
const typeorm_1 = require("@nestjs/typeorm");
const student_entity_1 = require("./entities/student.entity");
const subject_entity_1 = require("../subject/entities/subject.entity");
const city_entity_1 = require("../city/entities/city.entity");
const city_service_1 = require("../city/city.service");
const teacher_entity_1 = require("../teacher/entities/teacher.entity");
const teacher_service_1 = require("../teacher/teacher.service");
const subject_service_1 = require("../subject/subject.service");
const school_entity_1 = require("../school/entities/school.entity");
const school_service_1 = require("../school/school.service");
let StudentModule = class StudentModule {
};
StudentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                student_entity_1.Student,
                subject_entity_1.Subject,
                city_entity_1.City,
                teacher_entity_1.Teacher,
                school_entity_1.School
            ])
        ],
        controllers: [student_controller_1.StudentController],
        providers: [student_service_1.StudentService, city_service_1.CityService, teacher_service_1.TeacherService, subject_service_1.SubjectService, school_service_1.SchoolService]
    })
], StudentModule);
exports.StudentModule = StudentModule;
//# sourceMappingURL=student.module.js.map