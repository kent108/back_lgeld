import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'article' })
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 255 })
    description: string;

    @Column({ type: 'int' })
    picture_id: number;

    @Column({ type: 'int' })
    type_id: number;
}
