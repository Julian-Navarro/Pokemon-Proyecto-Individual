import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
// type Size = "saracatunga" | "merequetenge" //! PARA HACER TYPES PARA ESTE MODELO
@Entity()
export class Pokemon{
    @PrimaryGeneratedColumn("uuid")
    id!:number;
    @Column()
    name!:string;
    @Column()
    lifePoints!: number
    @Column()
    attackPoints!: number
    @Column()
    defensePoints!: number
    @Column()
    speedPoints!: number
    @Column()
    heigth!: string
    @Column()
    weigth!: string
    @Column("boolean", {default: false})
    createdInDb?:boolean;
    @CreateDateColumn()
    createdAt!:Date;
    @UpdateDateColumn()
    updatedAt!:Date
}