import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Expense } from '../entities/expense.entity';
import { PaymentMethod } from '../entities/paymentMethod.entity';
import { ExpenseParticipant } from '../entities/expenseParticipant.entity';

@Entity('users')
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column({ unique: true })
  email: string;

  @ApiProperty()
  @Column()
  password: string;

  @ApiProperty()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Expense, (expense) => expense.user)
  expenses: Expense[];

  @OneToMany(() => PaymentMethod, (paymentMethod) => paymentMethod.user)
  payments: PaymentMethod[];

  @OneToMany(() => ExpenseParticipant, (participant) => participant.user)
  expenseParticipants: ExpenseParticipant[];
}
