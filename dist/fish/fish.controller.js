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
exports.FishController = void 0;
const common_1 = require("@nestjs/common");
const fish_service_1 = require("./fish.service");
const create_fish_dto_1 = require("./dto/create-fish.dto");
const update_fish_dto_1 = require("./dto/update-fish.dto");
let FishController = class FishController {
    constructor(fishService) {
        this.fishService = fishService;
    }
    create(createFishDto) {
        return this.fishService.create(createFishDto);
    }
    findAll() {
        return this.fishService.findAll();
    }
    findOne(id) {
        return this.fishService.findOne(+id);
    }
    update(id, updateFishDto) {
        return this.fishService.update(+id, updateFishDto);
    }
    remove(id) {
        return this.fishService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_fish_dto_1.CreateFishDto]),
    __metadata("design:returntype", void 0)
], FishController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FishController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FishController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_fish_dto_1.UpdateFishDto]),
    __metadata("design:returntype", void 0)
], FishController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FishController.prototype, "remove", null);
FishController = __decorate([
    (0, common_1.Controller)('fish'),
    __metadata("design:paramtypes", [fish_service_1.FishService])
], FishController);
exports.FishController = FishController;
//# sourceMappingURL=fish.controller.js.map