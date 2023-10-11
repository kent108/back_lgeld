import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'price' })
export class Price {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  article_id: number;

  @Column({ type: 'int' })
  format_id: number;

  @Column({ type: 'varchar', length: 255 })
  price: string;
}
