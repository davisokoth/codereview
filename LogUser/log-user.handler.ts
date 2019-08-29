import { injectable, inject } from "tsyringe";
import { Context, HttpRequest } from "@azure/functions";
import { IUserHelper } from "../storage/users";
import { LoginModel } from "@storage/users";

@injectable()
class LogUser {
  constructor(
    @inject("IUserHelper") private userHelper: IUserHelper
  ) {}
  index = async (context: Context, req: HttpRequest): Promise<void> => {
    context.log("JavaScript HTTP trigger function processed a request.");

    const model = {
      email: req.query.email,
      password: req.query.password
    }

    const users = await this.userHelper.logUser(model);

    context.res = {
      status: "200",
      body: users
    };
  };
}

export { LogUser };
