import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { MangaService } from "./manga.service";
import { CreateMangaDto } from "./dto/create-manga.dto";
import { UpdateMangaDto } from "./dto/update-manga.dto";

@Controller('manga')
export class MangaController {
    constructor(private readonly mangaService: MangaService) {}

    @Post()
    create(@Body() createMangaDto: CreateMangaDto) {
        return this.mangaService.create(createMangaDto);
    }

    @Get()
    findAll(@Query('serie') serie?: string) {
        return this.mangaService.findAll(serie);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.mangaService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateMangaDto: UpdateMangaDto) {
        return this.mangaService.update(+id, updateMangaDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.mangaService.remove(+id);
    }
}
