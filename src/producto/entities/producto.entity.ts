import { Column, PrimaryColumn } from "typeorm";

export class Producto {

    @PrimaryColumn({length:10,nullable:false,unique:true})
    ID_PRO: string;

    @Column()
    NOM_PRO: string;

    @Column()
    PRE_UNI: number;

}
