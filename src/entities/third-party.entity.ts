import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import Decimal from 'decimal.js';
import {DecimalTransformer} from '../utils/decimal.transformer';

@Entity()
export class ThirdParty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  phoneNumber: string;

  @Column()
  address: string;

  @Column()
  birthday: Date;

  @Column()
  accidentRecord: number;


}
