import { Injectable } from '@nestjs/common';

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

    criar(novoFilme:any){
        return this.filmes.push(novoFilme)
    }
    atualizarUm(id: string | string){
        
    }
    pegarUm(id: string | string){
        return this.filmes[Number(id)]
    }
}
