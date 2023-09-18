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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const teacher_entity_1 = require("./entities/teacher.entity");
const city_service_1 = require("../city/city.service");
const subject_service_1 = require("../subject/subject.service");
const school_service_1 = require("../school/school.service");
let TeacherService = class TeacherService {
    constructor(teacherRepository, cityService, subjectService, schoolService) {
        this.teacherRepository = teacherRepository;
        this.cityService = cityService;
        this.subjectService = subjectService;
        this.schoolService = schoolService;
        this.teachers = [];
    }
    async getAll() {
        try {
            const criteria = { relations: ["city", "subject", "school"] };
            this.teachers = await this.teacherRepository.find(criteria);
            return this.teachers;
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND, error: 'Error in the search: ' + error
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getById(id) {
        try {
            const criteria = { relations: ['subject'], where: { idTeacher: id } };
            let teacher = await this.teacherRepository.findOne(criteria);
            if (!teacher)
                throw new Error('The teacher was not found.');
            return teacher;
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND, error: 'Error in the search for teacher ' + id + ' : ' + error
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async add(data) {
        try {
            if (data)
                if (data.fullName && data.dni && data.address && data.idCity && data.idSubject && data.idSchool)
                    if (await this.existsTeacherByDni(data.dni)) {
                        throw new Error('The teacher already exists.');
                    }
                    else {
                        let city = await this.cityService.getById(data.idCity);
                        let subject = await this.subjectService.getById(data.idSubject);
                        let school = await this.schoolService.getById(data.idSchool);
                        await this.teacherRepository.save(new teacher_entity_1.Teacher(data.fullName, data.dni, data.address, city, subject, school));
                    }
                else
                    throw new Error('The data for creating a teacher is not valid');
            else
                throw new Error('There is no data to create a teacher');
            return "ok";
        }
        catch (error) {
            return error.message;
        }
    }
    async delete(id) {
        try {
            if (id)
                if (await this.existsTeacher(id)) {
                    await this.teacherRepository.delete(id);
                }
                else
                    throw new Error('The teacher was not found.');
            else
                throw new Error('There is no data to delete teachers');
            return "ok";
        }
        catch (error) {
            return error.message;
        }
    }
    async update(id, data) {
        try {
            if (data)
                if (data.idTeacher && data.fullName && data.dni && data.address && data.idCity && data.idSubject && data.idSchool)
                    if (await this.existsTeacher(id)) {
                        let criteria = { where: { idTeacher: id } };
                        let teacher = await this.teacherRepository.findOne(criteria);
                        let city = await this.cityService.getById(data.idCity);
                        let subject = await this.subjectService.getById(data.idSubject);
                        let school = await this.schoolService.getById(data.idSchool);
                        teacher.setFullName(data.fullName);
                        teacher.setDniTeacher(data.dni);
                        teacher.setAddress(data.address);
                        teacher.setCity(city);
                        teacher.setSubject(subject);
                        teacher.setSchool(school);
                        await this.teacherRepository.save(teacher);
                    }
                    else
                        throw new Error('The teacher was not found.');
                else
                    throw new Error('The data for modifying a teacher is not valid');
            else
                throw new Error('There is no data to modify teachers');
            return "ok";
        }
        catch (error) {
            return error.message;
        }
    }
    async existsTeacher(id) {
        let criteria = { where: { idTeacher: id } };
        let teacher = await this.teacherRepository.findOne(criteria);
        return (teacher != null);
    }
    async existsTeacherByDni(dni) {
        let criteria = { where: { dni: dni } };
        let teacher = await this.teacherRepository.findOne(criteria);
        return (teacher != null);
    }
};
TeacherService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(teacher_entity_1.Teacher)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        city_service_1.CityService,
        subject_service_1.SubjectService,
        school_service_1.SchoolService])
], TeacherService);
exports.TeacherService = TeacherService;
//# sourceMappingURL=teacher.service.js.map