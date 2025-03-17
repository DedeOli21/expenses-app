import { Module } from '@nestjs/common';
import { CreateUserService } from './create-user.usecase';
import { ListUserService } from './list-user.usecase';
import { SearchUserService } from './search-user.usecase';
import { ShowUserService } from './show-user.usecase';
import { UpdateUserService } from './update-user.usecase';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/domain/entities/user.entity';


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    CreateUserService,
    ListUserService,
    SearchUserService,
    ShowUserService,
    UpdateUserService
  ],
  exports: [
    CreateUserService,
    ListUserService,
    SearchUserService,
    ShowUserService,
    UpdateUserService
  ],
})
export class UserModule {}