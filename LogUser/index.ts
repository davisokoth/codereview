import "reflect-metadata";
import { AzureFunction } from "@azure/functions";
import { container } from "tsyringe";
import { setupContainer } from "../container";
import { LogUser } from "./log-user.handler";

setupContainer();

const index: AzureFunction = container.resolve<LogUser>(LogUser).index;
export { index };
