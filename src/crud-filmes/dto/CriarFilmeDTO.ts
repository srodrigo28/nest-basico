import { IsString, IsNotEmpty, Length, IsNumber } from "class-validator"
export class CriarFilmeDTO{
    
    @IsNotEmpty()
    // @IsString({message: "1.Presa ser uma string"})
    @Length(3, 20, {message: "O tamanho deve ser válido"})
    titulo:string
    
    @IsNotEmpty()
    // @IsString({message: "2. Presa ser uma string"})
    @Length(3, 20, {message: "O tamanho deve ser válido"})
    diretor:string
    
    @IsNumber()
    @IsNotEmpty()
    @IsString({message: "Presa ser uma string"})
    ano:number
}