import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'type' })
export class Type {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar', length: 255 })
    description: string;
}
