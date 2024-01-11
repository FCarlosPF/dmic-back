import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name : 'producto_china'})
export class Catalogo {

    @PrimaryColumn()
    iqms_aka: number
    
    @Column()
    iqms_dg: number
    
    @Column()
    molde: string

    @Column()
    imagen: string
}
