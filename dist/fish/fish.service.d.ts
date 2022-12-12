import { CreateFishDto } from './dto/create-fish.dto';
import { UpdateFishDto } from './dto/update-fish.dto';
export declare class FishService {
    create(createFishDto: CreateFishDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFishDto: UpdateFishDto): string;
    remove(id: number): string;
}
