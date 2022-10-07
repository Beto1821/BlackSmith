import { Request, Response, NextFunction } from 'express';
import connection from '../models/connection';
import UserModel from '../models/user.models';

class ValidaLogin {
  usermodel: UserModel;

  constructor() {
    this.usermodel = new UserModel(connection);
  }

  validaLogin = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    if (!username) {
      return res.status(400).json({ message: '"username" is required' });
    }

    if (!password) {
      return res.status(400).json({ message: '"password" is required' });
    }

    const log = await this.usermodel.login(username, password);

    if (log.length === 0) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    next();
  };
}

export default ValidaLogin;
