import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'format' })
export class Format {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    size: string;
}
