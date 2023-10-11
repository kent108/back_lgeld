import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'boolean', default: false })
  admin: boolean;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  firstname: string;

  @Column({ type: 'varchar', length: 320, unique: true })
  mail: string;

  @Column({ type: 'char', length: 60 })
  password: string;

  @Column({ type: 'char', length: 10 })
  phone: string;

}
