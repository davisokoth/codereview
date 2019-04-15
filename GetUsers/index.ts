import "reflect-metadata";
import { AzureFunction } from "@azure/functions";
import { container } from "tsyringe";
import { setupContainer } from "../container";
import { GetUsers } from "./get-users.handler";

setupContainer();

const index: AzureFunction = container.resolve<GetUsers>(GetUsers).index;
export { index };
