import { FishService } from './fish.service';
import { CreateFishDto } from './dto/create-fish.dto';
import { UpdateFishDto } from './dto/update-fish.dto';
export declare class FishController {
    private readonly fishService;
    constructor(fishService: FishService);
    create(createFishDto: CreateFishDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFishDto: UpdateFishDto): string;
    remove(id: string): string;
}
