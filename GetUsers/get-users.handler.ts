import { injectable, inject } from "tsyringe";
import { Context, HttpRequest } from "@azure/functions";
import { IUserHelper } from "../storage/users";
// import { UserModel } from "@storage/users";

@injectable()
class GetUsers {
  constructor(
    @inject("IUserHelper") private userHelper: IUserHelper
  ) {}
  index = async (context: Context, req: HttpRequest): Promise<void> => {
    context.log("JavaScript HTTP trigger function processed a request.");

    /*
    const userId = req.query.userId;
    const name = req.query.name;
    const email = req.query.email;

    const user = new UserModel(userId, name, email);

    await this.userHelper.addUser(user);
    */
    const users = await this.userHelper.getUsers();

    context.res = {
      status: "200",
      body: users
    };
  };
}

export { GetUsers };
