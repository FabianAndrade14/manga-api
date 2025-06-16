import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Manga {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  numeroTomo: number;

  @Column()
  serie: string;

  @Column({ type: 'date' })
  fechaLanzamiento: Date;
}