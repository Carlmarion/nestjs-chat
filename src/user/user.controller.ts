import {Controller, Get} from '@nestjs/common';
import {UserService} from "./user.service";

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) {}
    // http://localhost:30000/users
    @Get()
    getUsers() {
        return this.userService.getUsers();
    }
}
