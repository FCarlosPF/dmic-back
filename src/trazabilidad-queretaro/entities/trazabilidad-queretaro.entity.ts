import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('trazabilidad_queretaro')
export class TrazabilidadQueretaro {
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
