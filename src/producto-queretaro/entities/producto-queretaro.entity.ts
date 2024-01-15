import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'producto_queretaro' })
export class ProductoQueretaro {
  @PrimaryColumn()
  iqms1: number;

  @Column()
  iqms2: number;

  @Column()
  iqms3: number;

  @Column()
  familia: string;

  @Column()
  molde1: string;

  @Column()
  molde2: string;

  @Column({ type: 'longblob' }) 
  foto: Buffer
}

