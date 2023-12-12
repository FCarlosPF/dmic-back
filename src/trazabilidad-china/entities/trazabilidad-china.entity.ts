import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('trazabilidad_china')
export class TrazabilidadChina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  iqms: number;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  salida_incoming: Date;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  salida_empaque: Date;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  salida_embarque: Date;

  @Column()
  id_usuario: number;
}