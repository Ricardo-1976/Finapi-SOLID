import { Router } from "express";

import { createDepositController } from "../modules/account/useCases/createDeposit";

const depositsRoutes = Router();

//Create Deposit
depositsRoutes.post("/", (request, response) => {
  return createDepositController.handle(request, response);
});

export { depositsRoutes };