import { Pool } from 'mysql2/promise';
import { IUser } from '../interfaces/interfaces';

class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async insertUser(user: IUser) {
    await this.connection.execute(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)',
      [user.username, user.classe, user.level, user.password],
    );
  }

  async login(username: string, password: string):Promise<IUser[]> {
    const [user] = await this.connection.execute(
      `SELECT * FROM Trybesmith.Users 
      WHERE username = ? AND password = ?`,
      [username, password],
    );

    return user as IUser[];
  }
}

export default UserModel;
