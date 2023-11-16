import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name : 'catalogo_queretaro'})
export class Catalogo {

    @PrimaryColumn()
    iqms: number
    
    @Column()
    familia: string
    
    @Column()
    molde: string

    @Column({type: 'blob'})
    foto: Buffer
}
