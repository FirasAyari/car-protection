import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { Min, IsInt } from 'class-validator';
// import { Car } from './car.entity';
// import { ThirdParty } from './thirdParty.entity';
// import { Client } from './client.entity';

@Entity()
export class AccidentEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer' })

  @Min(2)
  participants: number;

  @Column({ type: 'integer' })

  @Min(1)
  clientsInvolved: number;


  // @Column('jsonb', { nullable: true })
  // cars: Car[];

  // @Column()
  // thirdParty: ThirdParty;

  // @Column('jsonb', { nullable: true })
  // clients: Client[];
}
