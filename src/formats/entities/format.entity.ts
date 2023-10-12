import { Article } from "src/articles/entities/article.entity";
import { Price } from "src/prices/entities/price.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'format' })
export class Format {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    size: string;

    @ManyToMany(() => Article, (article) => article.id)
    articles: Article[];
}
