"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFishDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_fish_dto_1 = require("./create-fish.dto");
class UpdateFishDto extends (0, mapped_types_1.PartialType)(create_fish_dto_1.CreateFishDto) {
}
exports.UpdateFishDto = UpdateFishDto;
//# sourceMappingURL=update-fish.dto.js.map