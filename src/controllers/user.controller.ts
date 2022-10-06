import { Request, Response } from 'express';
import UserService from '../services/user.services';

class UserController {
  userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  insertUser = async (req: Request, res: Response) => {
    const user = req.body;
    const User = await this.userService.insertUser(user);
    return res.status(201).json(User);
  };
}

export default UserController;
