import { Role } from "../../common/enums/rol.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'usuarios'})
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true, nullable:true})
    email: string;

    @Column()
    name: string;

    @Column({nullable:true,select:false})
    password: string;

    @Column({type:'enum', enum:Role, default:Role.USER})
    role: string
}
