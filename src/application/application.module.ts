import { Module } from '@nestjs/common';
import { UserModule } from './usecases/user/user.module';
import { AuthModule } from './usecases/auth/auth.module';
import { DashboardModule } from './usecases/dashboard/dashboard.module';

const usecases = [
    UserModule,
    AuthModule,
    DashboardModule
];

@Module({
  imports: usecases,
  exports: usecases,
})
export class ApplicationModule {}