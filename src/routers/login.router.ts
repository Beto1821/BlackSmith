import { Router } from 'express';
import MidValidaLogin from '../middleware/valida.login';
import UserController from '../controllers/user.controller';  

const router = Router();

const midValidaLogin = new MidValidaLogin();
const userController = new UserController();

router.post('/', midValidaLogin.validaLogin, userController.login);

export default router;