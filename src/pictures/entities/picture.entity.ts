import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'picture' })
export class Picture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({ type: 'int' })
  size: number;

  @Column({ type: 'varchar', length: 255 })
  mimetype: string;
}
