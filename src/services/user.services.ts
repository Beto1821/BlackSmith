import UserModel from '../models/user.models';
import connection from '../models/connection';
import { IToken, IUser } from '../interfaces/interfaces';
import generateToken from '../util/geraToken';

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
}

export default UserService;
