import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import UserModel from '../models/user.models';
import connection from '../models/connection';
import { IToken, IUser } from '../interfaces/interfaces';
import generateToken from '../util/geraToken';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

class UserService {
  userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  async insertUser(user: IUser): Promise<IToken> {
    const { username, classe, level } = user;
    await this.userModel.insertUser(user);
    const token = await generateToken({ username, classe, level });
    return { token };
  }

  login = async (username: string, password: string): Promise<IToken> => {
    console.log('entrou service');
    const log = await this.userModel.login(username, password);
    
    const payload = { userId: log[0].id };
    const token = jwt.sign(
      payload,
      JWT_SECRET,
      { algorithm: 'HS256', expiresIn: '1d' },
    );

    return token as unknown as IToken;
  };
}

export default UserService;
