import "reflect-metadata";
import { UserModel } from './user.model';
import { inject, injectable } from 'tsyringe';
import { Neo4JService } from '../../services/storage/neo4j.service';

interface IUserHelper {
  addUser(user: UserModel): Promise<void>;
  getUsers(): Promise<UserModel>;
}

@injectable()
class UserHelper implements IUserHelper {
  public static TableName: string = 'User';
  
  constructor(@inject('ConnectionService') private connectionService: Neo4JService) {}

  addUser(user: UserModel): Promise<void> {
    return new Promise((resolve, reject) => {
      this.connectionService.insertEntity<UserModel>(
        UserModel.tableName, user, 
        (result) => {
          resolve(result);
        }
      );
    });
  }

  getUsers(): Promise<UserModel> {
    return new Promise((resolve, reject) => {
      this.connectionService.getEntities<UserModel>(UserModel.tableName, 
        results => {
          resolve(results);
        }
      );
    });
  }
}

export { UserHelper, IUserHelper };
