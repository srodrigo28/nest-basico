import { Injectable } from '@nestjs/common';
import { EditarFilmeDTO } from './dto/EditarFilmeDTO';
import { CriarFilmeDTO } from './dto/CriarFilmeDTO';

@Injectable()
export class CrudFilmesService {
    private filmes = [
        { titulo: 'Filme 1', diretor: 'Diretor 1', ano: 2021 },
        { titulo: 'Filme 2', diretor: 'Diretor 2', ano: 2022 },
        { titulo: 'Filme 3', diretor: 'Diretor 3', ano: 2023 },
    ]
    pegarTodos(){
        return this.filmes
    }
    pegarTodos2(investido: string){
        if(investido === "true"){
            // return this.filmes.sort
            return this.filmes.slice().reverse()
        }
        return this.filmes
    }
    criar(novoFilme:CriarFilmeDTO){
        const novo = this.filmes.push(novoFilme)
        return novoFilme
    }
    atualizarUm(id: number | string, dados: EditarFilmeDTO){
        const filme = this.filmes[id]
        const filmeAtualizado = { ...filme, ...dados }
        this.filmes[id] = filmeAtualizado
        return filmeAtualizado        
    }
    pegarUm(id: number | string){
        return this.filmes[Number(id)]
    }
    deletar(id: number){
        const filme = this.filmes.splice(+id, 1)
        return filme
    }
}
