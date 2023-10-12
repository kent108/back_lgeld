import { Article } from "src/articles/entities/article.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'type' })
export class Type {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar', length: 255 })
    description: string;

    @OneToMany(() => Article, (article) => article.id, { eager: true })
    article: Article[];
    
}
