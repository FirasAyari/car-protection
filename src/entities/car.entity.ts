import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import Decimal from 'decimal.js';
import { DecimalTransformer } from '../utils/decimal.transformer';
import { Min, IsInt, Max } from 'class-validator';


@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, transformer: new DecimalTransformer() })
  value: Decimal;

  @Column()
  @IsInt()
  @Min(1900)
  @Max(2024)
  year: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, transformer: new DecimalTransformer() })
  insuranceValue: Decimal;

}
