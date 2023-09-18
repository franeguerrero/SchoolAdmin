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
exports.SchoolService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const school_entity_1 = require("./entities/school.entity");
const city_service_1 = require("../city/city.service");
let SchoolService = class SchoolService {
    constructor(schoolRepository, cityService) {
        this.schoolRepository = schoolRepository;
        this.cityService = cityService;
        this.schools = [];
    }
    async getAll() {
        try {
            const criteria = { relations: ['city', "teachers", "teachers.subject"] };
            this.schools = await this.schoolRepository.find(criteria);
            return this.schools;
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND, error: 'Search error: ' + error
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getById(id) {
        try {
            const criteria = { relations: ['city', 'teachers', 'teachers.subject'], where: { idSchool: id } };
            let school = await this.schoolRepository.findOne(criteria);
            if (!school)
                throw new Error('School not found.');
            return school;
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND, error: 'Error searching for school ' + id + ' : ' + error
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async add(data) {
        try {
            if (data)
                if (data.name && data.address && data.idCity)
                    if (await this.schoolExistsByData(data.name, data.address)) {
                        throw new Error('The school already exists.');
                    }
                    else {
                        let city = await this.cityService.getById(data.idCity);
                        await this.schoolRepository.save(new school_entity_1.School(data.name, data.address, city));
                    }
                else
                    throw new Error('Invalid data for creating a school');
            else
                throw new Error('No data to create a school');
            return "ok";
        }
        catch (error) {
            return error.message;
        }
    }
    async delete(id) {
        try {
            if (id)
                if (await this.schoolExists(id)) {
                    await this.schoolRepository.delete(id);
                }
                else
                    throw new Error('School not found.');
            else
                throw new Error('No data to delete schools');
            return "ok";
        }
        catch (error) {
            return error.message;
        }
    }
    async update(id, data) {
        try {
            if (data)
                if (data.idSchool && data.name && data.address && data.idCity)
                    if (await this.schoolExists(id)) {
                        let criteria = { where: { idSchool: id } };
                        let school = await this.schoolRepository.findOne(criteria);
                        let city = await this.cityService.getById(data.idCity);
                        school.setName(data.name);
                        school.setAddress(data.address);
                        school.setCity(city);
                        await this.schoolRepository.save(school);
                    }
                    else
                        throw new Error('School not found.');
                else
                    throw new Error('Invalid data for modifying a school');
            else
                throw new Error('No data to modify schools');
            return "ok";
        }
        catch (error) {
            return error.message;
        }
    }
    async schoolExists(id) {
        let criteria = { where: { idSchool: id } };
        let school = await this.schoolRepository.findOne(criteria);
        return (school != null);
    }
    async schoolExistsByData(name, address) {
        let criteria = { where: { name: name, address: address } };
        let school = await this.schoolRepository.findOne(criteria);
        return (school != null);
    }
};
SchoolService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(school_entity_1.School)),
    __metadata("design:paramtypes", [typeorm_2.Repository, city_service_1.CityService])
], SchoolService);
exports.SchoolService = SchoolService;
//# sourceMappingURL=school.service.js.map