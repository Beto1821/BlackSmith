import { Request, Response } from 'express';
import UserService from '../services/user.services';

class UserController {
  constructor(private userService = new UserService()) {}

  insertUser = async (req: Request, res: Response) => {
    const user = req.body;
    const User = await this.userService.insertUser(user);
    return res.status(201).json(User);
  };

  login = async (req: Request, res: Response) => {
    console.log('entrou controller');
    
    const { username, password } = req.body;
    console.log(req.body);
    
    const token = await this.userService.login(username, password);
    console.log(token);
    
    return res.status(200).json({ token });
  };
}

export default UserController;
