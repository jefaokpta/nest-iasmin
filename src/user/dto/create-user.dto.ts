import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class CreateUserDto {
   @IsOptional()
   readonly id: number;

   @IsNotEmpty({ message: 'nome obrigatorio' })
   readonly name: string;

   @IsNotEmpty({ message: 'email obrigatorio' })
   @IsEmail({}, { message: 'email invalido' })
   readonly email: string;

   @IsNotEmpty()
   @MinLength(6, { message: 'senha deve ter no minimo 6 caracteres' })
   readonly password: string;
}
