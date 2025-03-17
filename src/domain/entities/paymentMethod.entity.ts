import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Expense } from './expense.entity';

@Entity('payment_methods')
export class PaymentMethod {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  details: string;

  @ApiProperty()
  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.payments)
  user: User;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Expense, (expense) => expense.paymentMethod)
  expenses: Expense[];
}
