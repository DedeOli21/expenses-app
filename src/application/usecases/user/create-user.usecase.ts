import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateUserService {
    constructor() {}

    async execute() {
        return { 
            user: "User created successfully"
        };
    }
}