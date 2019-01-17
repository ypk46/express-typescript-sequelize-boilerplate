import { Request, Response } from 'express';
import { User, UserInterface } from '../models/user';

export class UserController {

    constructor() { }

    readAll(req: Request, res: Response) {
        User.findAll()
            .then((user: UserInterface[]) => {
                res.json(user);
            })
            .catch((err: any) => {
                res.json(err);
            })
    }
}