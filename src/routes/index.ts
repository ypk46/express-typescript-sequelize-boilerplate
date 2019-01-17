import { Router } from 'express';
import { UserController } from '../controllers/user';

export default class MainRouter {

    router: Router;
    userController: UserController;

    constructor() {

        // Initialize controllers objects
        this.userController = new UserController();

        // Initialize router object
        this.router = Router({ mergeParams: true });
        this.userRoutes();

    }

    private userRoutes() {
        this.router.route('/users')
            .get(this.userController.readAll)
            .post(this.userController.create);

        this.router.route('/users/:id')
            .get(this.userController.read)
            .put(this.userController.update)
            .delete(this.userController.delete);
    }


}