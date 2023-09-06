import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';
@Controller('user')
export class UserController {
    constructor(
        private readonly userService:UserService
    ){}
  @Post('createUser')
    async createUser(@Body() data:createUserDto){
        return await this.userService.createUser(data)

    }

    @Delete('deleteUser/:id')
    async deleteUser(@Param() param){
        return await this.userService.deleteUser(param.id)
    }

    @Get('')
    async getAlllUser(){
        return this.userService.getAllUser();
    }

    @Get('/:id')
    async getUserById(@Param() param){
        return this.userService.getUserById(param.id);
    }

    @Patch('updateUser/:id')
    async updateUser(@Param() param,@Body() data:updateUserDto){
        return await this.userService.updateUser(param.id,data)

    }


}
