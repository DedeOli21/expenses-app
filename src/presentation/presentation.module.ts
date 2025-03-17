import { Module } from "@nestjs/common";
import { UserController } from "./controllers/user/user.controller";
import { ApplicationModule } from "src/application/application.module";
import { AuthController } from "./controllers/auth/auth.controller";

@Module({
    imports: [ApplicationModule],
    controllers: [UserController, AuthController],
    providers: [],
    exports: []
})

export class PresentationModule {}