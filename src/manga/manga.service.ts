import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Manga } from "./entities/manga.entity";
import { CreateMangaDto } from "./dto/create-manga.dto";
import { UpdateMangaDto } from './dto/update-manga.dto';

@Injectable()
export class MangaService {
    constructor(
        @InjectRepository(Manga)
        private mangaRepository: Repository<Manga>,
    ) {}

    create(createMangaDto: CreateMangaDto) {
        const manga = this.mangaRepository.create(createMangaDto);
        return this.mangaRepository.save(manga);
    }

    findAll(serie?: string) {
        if (serie) {
            return this.mangaRepository.find({ where: {serie }});
        }
        return this.mangaRepository.find();
    }

    findOne(id: number) {
        return this.mangaRepository.findOneBy({ id });
    }

    async update(id: number, updateMangaDto: UpdateMangaDto) {
        await this.mangaRepository.update(id, updateMangaDto);
        return this.findOne(id);
    }

    async remove(id: number) {
        const manga = await this.findOne(id);
        return this.mangaRepository.remove(manga as any);
    }
}