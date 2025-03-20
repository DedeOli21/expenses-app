import { Controller, Get, Query } from "@nestjs/common";
import { DashboardService, DashboardFilters } from "src/application/usecases/dashboard/dashboard.usecase";

@Controller('dashboard')
export class DashboardController {
    constructor(
        private readonly dashboardService: DashboardService
    ) {}

    @Get('summary')
    async dashboard(
        @Query('name') name?: string,
        @Query('tripId') tripId?: number,
        @Query('startDate') startDate?: string,
        @Query('endDate') endDate?: string
    ): Promise<any> {
        return this.dashboardService.execute({
            name,
            tripId,
            startDate,
            endDate
        })
    }
}