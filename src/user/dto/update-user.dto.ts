import { Transform } from "class-transformer";
import{IsString,IsNotEmpty,IsEmail} from 'class-validator'


export class updateUserDto{
    @IsString()
    name?:string;

    @IsEmail()
    
    email?:string;

    @IsString()

    password?:string;

    @IsString()
    mobile?:string;

    @IsString()
    gender?:string;

    @Transform(({value}) => value && new Date(value))
    date_of_birth?: Date;

}