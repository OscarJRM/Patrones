import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Factura{

    @PrimaryColumn({nullable: false, unique: true})
    ID_FAC: number;

    @Column()
    FEC_FAC: Date;

    @OneToOne(()=>Cliente)
    @JoinColumn()
    CED_CLI_PER: Cliente;


    @Column()
    TOT_FAC: number;
}