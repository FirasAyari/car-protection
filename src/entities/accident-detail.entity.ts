/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable, JoinColumn } from 'typeorm';
import { Min } from 'class-validator';
import { Car } from './car.entity';
import { ThirdParty } from './third-party.entity';
import { Client } from './client.entity';

@Entity()
export class AccidentDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'integer' })
    @Min(2)
    participants: number;

    @Column({ type: 'integer' })
    @Min(1)
    clientsInvolved: number;

    @ManyToOne(() => Car, { eager: true })
    @JoinColumn()
    car: Car;

    @ManyToMany(() => ThirdParty, { eager: true })
    thirdParty: ThirdParty[];

    @ManyToMany(() => Client, { eager: true })
    @JoinTable()
    clients: Client[];
}
