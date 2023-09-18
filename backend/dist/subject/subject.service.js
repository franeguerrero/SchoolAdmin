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
exports.SubjectService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const subject_entity_1 = require("./entities/subject.entity");
let SubjectService = class SubjectService {
    constructor(subjectRepository) {
        this.subjectRepository = subjectRepository;
        this.subjects = [];
    }
    async getAll() {
        try {
            const criteria = { relations: ['teacher', 'teacher.school'] };
            this.subjects = await this.subjectRepository.find(criteria);
            return this.subjects;
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'Error in search: ' + error,
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getById(id) {
        try {
            const criteria = {
                relations: ['teacher', 'teacher.school'],
                where: { idSubject: id },
            };
            let subject = await this.subjectRepository.findOne(criteria);
            if (!subject)
                throw new Error('Subject not found.');
            return subject;
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'Error in search for subject ' + id + ' : ' + error,
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async add(data) {
        try {
            let subject;
            if (data)
                if (data.name) {
                    if (await this.subjectExistsByName(data.name)) {
                        throw new Error('Subject already exists');
                    }
                    else {
                        subject = new subject_entity_1.Subject(data.name);
                        await this.subjectRepository.save(subject);
                    }
                }
                else
                    throw new Error('Data to create subject is invalid');
            else
                throw new Error('No data to create subject');
            return 'ok';
        }
        catch (error) {
            return error.message;
        }
    }
    async delete(id) {
        try {
            if (id)
                if (await this.subjectExists(id)) {
                    await this.subjectRepository.delete(id);
                }
                else
                    throw new Error('The subject was not found.');
            else
                throw new Error('No data to delete subjects');
            return 'ok';
        }
        catch (error) {
            return error.message;
        }
    }
    async update(id, data) {
        try {
            if (data)
                if (id && data.name)
                    if (await this.subjectExists(id)) {
                        let criteria = { where: { idSubject: id } };
                        let subject = await this.subjectRepository.findOne(criteria);
                        subject.setName(data.name);
                        await this.subjectRepository.save(subject);
                    }
                    else
                        throw new Error('The subject was not found.');
                else
                    throw new Error('Data to modify subject is invalid');
            else
                throw new Error('No data to modify subjects');
            return 'ok';
        }
        catch (error) {
            return error.message;
        }
    }
    async subjectExists(id) {
        let criteria = { where: { idSubject: id } };
        let subject = await this.subjectRepository.findOne(criteria);
        return subject != null;
    }
    async subjectExistsByName(name) {
        let criteria = { where: { name: name } };
        let subject = await this.subjectRepository.findOne(criteria);
        return subject != null;
    }
};
SubjectService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(subject_entity_1.Subject)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SubjectService);
exports.SubjectService = SubjectService;
//# sourceMappingURL=subject.service.js.map