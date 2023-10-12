import { Article } from "src/articles/entities/article.entity";
import { Column, Entity, JoinColumn, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'type' })
export class Type {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar', length: 255 })
    description: string;

    // Relations entre les tables

    @OneToMany(() => Article, (article) => article.id)
    article: Article[];
    
}
