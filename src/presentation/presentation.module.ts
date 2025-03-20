import { Module } from "@nestjs/common";
import { UserController } from "./controllers/user/user.controller";
import { ApplicationModule } from "src/application/application.module";
import { AuthController } from "./controllers/auth/auth.controller";
import { DashboardController } from "./controllers/dashboard/dashboard.controller";

@Module({
    imports: [ApplicationModule],
    controllers: [UserController, AuthController, DashboardController],
    providers: [],
    exports: []
})

export class PresentationModule {}