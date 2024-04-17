import { Column, PrimaryColumn } from "typeorm";

export class Cliente {

    @PrimaryColumn({length:10, nullable: false, unique: true})
    ced_cli: string;

    @Column()
    nom_cli: string;

    @Column()
    ape_cli: string;
}
