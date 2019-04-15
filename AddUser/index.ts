import "reflect-metadata";
import { AzureFunction } from "@azure/functions";
import { container } from "tsyringe";
import { setupContainer } from "../container";
import { NewUser } from "./new-user.handler";

setupContainer();

const index: AzureFunction = container.resolve<NewUser>(NewUser).index;
export { index };
