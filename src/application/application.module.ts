import { Module } from '@nestjs/common';
import { UserModule } from './usecases/user/user.module';
import { AuthModule } from './usecases/auth/auth.module';

const usecases = [
    UserModule,
    AuthModule
];

@Module({
  imports: usecases,
  exports: usecases,
})
export class ApplicationModule {}