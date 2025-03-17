import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import { PaymentMethod } from './paymentMethod.entity';
import { ExpenseParticipant } from './expenseParticipant.entity';

@Entity('expenses')
export class Expense {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty()
  @Column()
  category: string;

  @ApiProperty()
  @Column('decimal', { precision: 10, scale: 2 })
  totalAmount: number;

  @ApiProperty()
  @Column({ default: false })
  paid: boolean;

  @ApiProperty()
  @Column({ type: 'timestamp' })
  purchaseDate: Date;

  @ApiProperty()
  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.expenses)
  user: User;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  paymentMethodId: number;

  @ManyToOne(() => PaymentMethod, (method) => method.expenses, { nullable: true })
  @JoinColumn({ name: 'paymentMethodId' })
  paymentMethod: PaymentMethod;

  @ApiProperty()
  @Column({ default: false })
  charged: boolean;

  @ApiProperty()
  @Column({ default: false })
  closed: boolean;

  @OneToMany(() => ExpenseParticipant, (participant) => participant.expense, { cascade: true })
  participants: ExpenseParticipant[];

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;
}
