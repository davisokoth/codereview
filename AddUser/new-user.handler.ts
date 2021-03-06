import { injectable, inject } from "tsyringe";
import { Context, HttpRequest } from "@azure/functions";
import { IUserHelper, UserModel } from "../storage/users";

@injectable()
class NewUser {
  constructor(
    @inject("IUserHelper") private userHelper: IUserHelper
  ) {}
  index = async (context: Context, req: HttpRequest): Promise<void> => {
    context.log("JavaScript HTTP trigger function processed a request.");

    const userId = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const avatar_url = req.body.avatar_url;
    const profile = req.body.profile;
    const user = new UserModel(userId, name, email, avatar_url, profile);
    const userRes = await this.userHelper.addUser(user);

    context.res = {
      status: "200",
      body: userRes
    };
  };
}

export { NewUser };
