import { Controller, Get, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { CreateUserService } from "src/application/usecases/user/create-user.usecase";
import { ListUserService } from "src/application/usecases/user/list-user.usecase";
import { SearchUserService } from "src/application/usecases/user/search-user.usecase";
import { UpdateUserService } from "src/application/usecases/user/update-user.usecase";

@Controller('user')
export class UserController {
    constructor(
        private readonly createUserService: CreateUserService,
        private readonly listUserService: ListUserService,
        private readonly showUserService: ListUserService,
        private readonly updateUserService: UpdateUserService,
        private readonly searchUserService: SearchUserService
    ) {}

    @Post('create')
    @ApiOperation({ summary: 'Create a new user' })
    @ApiResponse({ status: 201, description: 'User created successfully' })
    @ApiResponse({ status: 400, description: 'Bad request' })
    async create() {
        return this.createUserService.execute();
    }


    @Get('list')
    @ApiOperation({ summary: 'List all users' })
    @ApiResponse({ status: 200, description: 'Users listed successfully' })
    @ApiResponse({ status: 400, description: 'Bad request' })
    async list() {
        return this.listUserService.execute();
    }

    @Get('show')
    @ApiOperation({ summary: 'Show a user' })
    @ApiResponse({ status: 200, description: 'User shown successfully' })
    @ApiResponse({ status: 400, description: 'Bad request' })
    async show() {
        return this.showUserService.execute();
    }

    @Put('update')
    @ApiOperation({ summary: 'Update a user' })
    @ApiResponse({ status: 200, description: 'User updated successfully' })
    @ApiResponse({ status: 400, description: 'Bad request' })
    async update() {
        return this.updateUserService.execute();
    }

    @Get('search')
    @ApiOperation({ summary: 'Search for users' })
    @ApiResponse({ status: 200, description: 'Users found successfully' })
    @ApiResponse({ status: 400, description: 'Bad request' })
    async search() {
        return this.searchUserService.execute();
    }
}