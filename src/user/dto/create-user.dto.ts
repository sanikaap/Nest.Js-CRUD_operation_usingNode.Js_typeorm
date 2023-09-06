import { Transform } from "class-transformer";
import{IsString,IsNotEmpty,IsEmail} from 'class-validator'


export class createUserDto{
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsString()
    @IsNotEmpty()
    password:string;

    @IsString()
    @IsNotEmpty()
    mobile:string;

    @IsString()
    @IsNotEmpty()
    gender:string;

    @Transform(({value}) => value && new Date(value))
    date_of_birth: Date;

}