import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private usersRepository: Repository<UsuarioEntity>,
  ) {}

  findAll(): Promise<UsuarioEntity[]> {
    return this.usersRepository.find();
  }

  create(usuario: UsuarioEntity): Promise<UsuarioEntity> {
    return this.usersRepository.save(usuario);
  }
}
