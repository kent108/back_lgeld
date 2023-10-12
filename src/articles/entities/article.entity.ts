import { Format } from "src/formats/entities/format.entity";
import { Picture } from "src/pictures/entities/picture.entity";
import { Price } from "src/prices/entities/price.entity";
import { Type } from "src/types/entities/type.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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


    // Relations entre les tables prices et pictures

    // @OneToMany(() => Price, (price) => price.id, { eager: true })
    // prices: Price[];

    @ManyToMany(() => Format, (format) => format.id, { eager: true })
    @JoinTable({
        name: 'price',
        joinColumn: {
            name: 'article_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'format_id',
            referencedColumnName: 'id'
        }
    })
    Formats: Format[];
    

    @OneToOne(() => Picture, (picture) => picture.id, { eager: true })
    picture: Picture;

    // Relations entre les tables articles et types

    @ManyToOne(() => Type, (type) => type.id, { eager: true })
    type: Type;
   
}
