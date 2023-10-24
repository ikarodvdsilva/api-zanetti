import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'usuarios' })
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  UsuarioID: number;

  @Column()
  NomeUsuario: string;

  @Column()
  Senha: string;

  @Column()
  TempoAcessoContratado: number;

  @Column()
  StatusConta: string;
}
