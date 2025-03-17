import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Expense } from './expense.entity';
import { User } from './user.entity';

@Entity('expense_participants')
export class ExpenseParticipant {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column('decimal', { precision: 10, scale: 2 })
  individualAmount: number;

  @ApiProperty()
  @Column({ default: false })
  paid: boolean;

  @ManyToOne(() => Expense, (expense) => expense.participants, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'expenseId' })
  expense: Expense;

  @ApiProperty()
  @Column()
  expenseId: number;

  @ManyToOne(() => User, (user) => user.expenseParticipants)
  user: User;

  @ApiProperty()
  @Column()
  userId: number;
}
