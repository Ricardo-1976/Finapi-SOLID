import { request, response, Router } from "express";

import { createAccountController } from "../modules/account/useCases/createAccount";
import { listAccountsController } from "../modules/account/useCases/listAccounts";

const accountsRoutes = Router();

// Create User
accountsRoutes.post("/", (request, response) => {
  return createAccountController.handle(request, response);
})

// List User
accountsRoutes.get("/", (request, response) =>  {
return listAccountsController.handle(request, response);
})

export { accountsRoutes };