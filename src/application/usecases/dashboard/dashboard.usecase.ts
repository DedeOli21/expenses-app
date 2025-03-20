import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Expense } from 'src/domain/entities/expense.entity';
import { User } from 'src/domain/entities/user.entity';
import { Repository } from 'typeorm';

export interface DashboardFilters {
  name?: string;
  tripId?: number;
  startDate?: string;
  endDate?: string;
}

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(Expense) 
      private expenseRepository: Repository<Expense>
  ) {}

  execute(filters: DashboardFilters) {
    const expensesByAllUsers = this.getExpensesByAllUsers(filters);
    const expensesByCategory = this.getExpensesByCategory(filters);
    const expensesDetails = this.getExpensesDetails(filters);

    return {
      totalSpent: 3500,
      userExpenses: expensesByAllUsers,
      categoryExpenses: expensesByCategory,
      expensesDetails: expensesDetails,
      filtersApplied: filters,
    };
  }

  getExpensesByAllUsers(filters: DashboardFilters) {
    const data = this.expenseRepository.createQueryBuilder('expenses')
      .select('SUM(expense.totalAmount)', 'total')
      .addSelect('user.name', 'user')

    if (filters.name) {
      data.where('user.name = :name', { name: filters.name });
    }

    if (filters.tripId) {
      data.where('user.tripId = :tripId', { tripId: filters.tripId });
    }

    if (filters.startDate && filters.endDate) {
      data.where('expense.purchaseDate BETWEEN :startDate AND :endDate', {
        startDate: filters.startDate,
        endDate: filters.endDate,
      });
    }

    return data.getRawMany();
  }

  getExpensesByCategory(filters: DashboardFilters) {
    return this.expenseRepository.createQueryBuilder('expenses')
      .select('SUM(expense.totalAmount)', 'total')
      .addSelect('expense.category', 'category')
      .groupBy('expense.category')
      .getRawMany();
  }

  getExpensesDetails(filters: DashboardFilters) {
    const data = this.expenseRepository.createQueryBuilder('expenses')
      .select('expense.id', 'id')
      .addSelect('expense.description', 'description')
      .addSelect('expense.totalAmount', 'totalAmount')
      .addSelect('expense.purchaseDate', 'purchaseDate')
      .addSelect('user.name', 'user')
      .addSelect('paymentMethod.name', 'paymentMethod')
      .leftJoin('expenses.user', 'user')
      .leftJoin('expenses.paymentMethod', 'paymentMethod')

    if (filters.name) {
      data.where('user.name = :name', { name: filters.name });
    }

    if (filters.tripId) {
      data.where('user.tripId = :tripId', { tripId: filters.tripId });
    }

    if (filters.startDate && filters.endDate) {
      data.where('expense.purchaseDate BETWEEN :startDate AND :endDate', {
        startDate: filters.startDate,
        endDate: filters.endDate,
      });
    }

    return data.getRawMany();
  }
}
