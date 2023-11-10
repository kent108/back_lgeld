import { Article } from 'src/articles/entities/article.entity';
import { Format } from 'src/formats/entities/format.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'price' })
export class Price {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  article_id: number;

  @Column({ type: 'int' })
  format_id: number;

  @Column({ type: 'int'})
  price: number;


  // Relations entre les tables articles et formats

  @ManyToOne(() => Article, (article) => article.id) // Plusieurs prix pour un article
  @JoinColumn({ name: 'article_id' }) // Clé étrangère
  article: Article; // Nom de la relation

  @ManyToOne(() => Format, (format) => format.id, {eager: true}) // Plusieurs prix pour un format
  @JoinColumn({ name: 'format_id' }) // Clé étrangère
  format: Format; // Nom de la relation
}

