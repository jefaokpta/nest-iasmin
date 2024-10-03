/**
 * @author Jefferson Alves Reis (jefaokpta) < jefaokpta@hotmail.com >
 * Date: 9/27/24
 */

import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
    @IsNotEmpty()
    name: string;
    @IsEmail()
    readonly email: string;
    @IsNotEmpty()
    readonly password: string;
}