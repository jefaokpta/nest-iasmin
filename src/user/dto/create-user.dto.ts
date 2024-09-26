import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class CreateUserDto {
   @IsOptional()
   id: number;

   @IsOptional()
   name: string;

   @IsNotEmpty({ message: 'email obrigatorio' })
   @IsEmail({}, { message: 'email invalido' })
   email: string;

   @IsNotEmpty()
   @MinLength(6, { message: 'senha deve ter no minimo 6 caracteres' })
   password: string;
}
