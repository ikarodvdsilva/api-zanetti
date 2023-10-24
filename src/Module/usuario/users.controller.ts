// users.controller.ts

import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsuarioEntity } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll(): Promise<UsuarioEntity[]> {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() usuario: UsuarioEntity): Promise<UsuarioEntity> {
    return this.usersService.create(usuario);
  }
}
