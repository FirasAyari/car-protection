import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import Decimal from 'decimal.js';
import { DecimalTransformer } from '../utils/decimal.transformer';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  cpf: string;


  @Column()
  phoneNumber: string;

  @Column()
  address: string;

  @Column()
  birthday?: Date;

  @Column()
  contractNumbers: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, transformer: new DecimalTransformer() })
  value: Decimal;

  @Column()
  accidentRecord: boolean;


}
