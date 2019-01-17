import { Request, Response } from 'express';
import { User, UserInterface } from '../models/user';

export class UserController {

    constructor() { }

    readAll(req: Request, res: Response) {
        User.findAll()
            .then((users: UserInterface[]) => {
                res.json(users);
            })
            .catch((err: any) => {
                res.json(err);
            });
    }

    read(req: Request, res: Response) {
        User.findById(req.params.id)
            .then((user: UserInterface | null) => {
                if (user) {
                    res.json(user);
                } else {
                    res.status(204).send();
                }
            })
            .catch((err: any) => {
                res.json(err);
            });
    }

    create(req: Request, res: Response) {
        User.create(req.body)
            .then((user: UserInterface) => {
                res.json(user);
            })
            .catch((err: any) => {
                res.json(err);
            });
    }

    update(req: Request, res: Response) {
        User.update(req.body, {
            fields: Object.keys(req.body),
            where: { id: req.params.id }
        }).then((affectedRows: [number, UserInterface[]]) => {
            res.json({
                affectedRows: Number(affectedRows)
            });
        }).catch((err: any) => {
            res.json(err);
        })
    }

    delete(req: Request, res: Response) {
        User.destroy({
            where: { id: req.params.id }
        })
            .then((removedRows: number) => {
                res.json({
                    removedRows: removedRows
                });
            }).catch((err: any) => {
                res.json(err);
            })

    }
}