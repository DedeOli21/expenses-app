import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { PresentationModule } from './presentation/presentation.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/entities/user.entity';
import { Expense } from './domain/entities/expense.entity';
import { ExpenseParticipant } from './domain/entities/expenseParticipant.entity';
import { PaymentMethod } from './domain/entities/paymentMethod.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    ApplicationModule,
    PresentationModule
  ],
})
export class AppModule {}