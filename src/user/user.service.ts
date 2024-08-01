import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    getUsers() {
        return [{
            id: 1,
            name: "Jean",
            phrase: "Hello, comment ca va?"
        }]
    }
}
