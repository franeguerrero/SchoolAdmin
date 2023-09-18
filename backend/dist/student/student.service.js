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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const student_entity_1 = require("./entities/student.entity");
const city_service_1 = require("../city/city.service");
const teacher_entity_1 = require("../teacher/entities/teacher.entity");
let StudentService = class StudentService {
    constructor(studentRepository, cityService, teacherRepository) {
        this.studentRepository = studentRepository;
        this.cityService = cityService;
        this.teacherRepository = teacherRepository;
        this.students = [];
    }
    async getAll() {
        try {
            const criteria = { relations: ["city", "teachers", 'teachers.subject'] };
            this.students = await this.studentRepository.find(criteria);
            return this.students;
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND, error: 'Error in search: ' + error
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getById(id) {
        try {
            const criteria = { relations: ['city', 'teachers', 'teachers.subject'], where: { idStudent: id } };
            let student = await this.studentRepository.findOne(criteria);
            if (!student)
                throw new Error('The student was not found.');
            return student;
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND, error: 'Error in search for student ' + id + ' : ' + error
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async add(data) {
        try {
            if (data)
                if (data.fullName && data.birth && data.dni && data.address && data.idCity && data.idsTeacher)
                    if (await this.studentExistsByDni(data.dni)) {
                        throw new Error('The student already exists.');
                    }
                    else {
                        const teachers = await this.teacherRepository.findByIds(data.idsTeacher);
                        let city = await this.cityService.getById(data.idCity);
                        await this.studentRepository.save(new student_entity_1.Student(data.fullName, data.birth, data.dni, data.address, city, teachers));
                    }
                else
                    throw new Error('Data for creating a student is not valid');
            else
                throw new Error('No data to create a student');
            return "ok";
        }
        catch (error) {
            return error.message;
        }
    }
    async delete(id) {
        try {
            if (id)
                if (await this.studentExists(id)) {
                    await this.studentRepository.delete(id);
                }
                else
                    throw new Error('The student was not found.');
            else
                throw new Error('No data to delete students');
            return "ok";
        }
        catch (error) {
            return error.message;
        }
    }
    async update(id, data) {
        try {
            if (data)
                if (data.idStudent && data.fullName && data.birth && data.dni && data.address && data.idCity)
                    if (await this.studentExists(id)) {
                        let criteria = { where: { idStudent: id } };
                        let student = await this.studentRepository.findOne(criteria);
                        let city = await this.cityService.getById(data.idCity);
                        student.setFullName(data.fullName);
                        student.setBirth(data.birth);
                        student.setDniStudent(data.dni);
                        student.setAddress(data.address);
                        student.setCity(city);
                        await this.studentRepository.save(student);
                    }
                    else
                        throw new Error('The student was not found.');
                else
                    throw new Error('Data to modify student is not valid');
            else
                throw new Error('No data to modify student');
            return "ok";
        }
        catch (error) {
            return error.message;
        }
    }
    async studentExists(id) {
        let criteria = { where: { idStudent: id } };
        let student = await this.studentRepository.findOne(criteria);
        return (student != null);
    }
    async studentExistsByDni(dni) {
        let criteria = { where: { dni: dni } };
        let student = await this.studentRepository.findOne(criteria);
        return (student != null);
    }
};
StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.Student)),
    __param(2, (0, typeorm_1.InjectRepository)(teacher_entity_1.Teacher)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        city_service_1.CityService,
        typeorm_2.Repository])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map