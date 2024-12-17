import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CrudFilmesService } from './crud-filmes.service';

@Controller('crud-filmes')
export class CrudFilmesController {
    constructor(private readonly crudFilmesService:CrudFilmesService){}
    
    @Get()
        pegarTodos(){
        return this.crudFilmesService.pegarTodos()
    }

    @Get("/abc")
        pegarTodos2(@Query('invertido') invertido:string){
        return this.crudFilmesService.pegarTodos2(invertido)
    }
    
    @Post("/criar")
    criar(@Body() dadosFilme: any){
        return this.crudFilmesService.criar(dadosFilme)
    }

    @Get(":id")
    pegarUm(@Param("id") id:string){
        return this.crudFilmesService.pegarUm(id)
    }

    @Put(":id")
    atualizarUm(@Param("id") id:string){
        return this.crudFilmesService.atualizarUm(id)
    }
}