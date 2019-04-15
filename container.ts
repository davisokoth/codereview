import { container } from "tsyringe";
import "reflect-metadata";
import { IUserHelper, UserHelper } from "./storage/users";
import { Neo4JService } from "./services/storage/neo4j.service";

const setupContainer = () => {
  container.register<IUserHelper>("IUserHelper", {
    useClass: UserHelper
  });
  container.register<Neo4JService>("ConnectionService", {
    useClass: Neo4JService
  });
};

export { setupContainer };