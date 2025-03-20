import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExpenseParticipant } from "src/domain/entities/expenseParticipant.entity";
import { User } from "src/domain/entities/user.entity";
import { DashboardService } from "./dashboard.usecase";

@Module({
    imports: [TypeOrmModule.forFeature([User, ExpenseParticipant])],
    providers: [DashboardService],
    exports: [DashboardService]
})
export class DashboardModule {}