import { Router } from "express";

import { accountsRoutes } from "./accounts.routes";
import { depositsRoutes } from "./deposits.routes";

const router = Router()

router.use("/accounts", accountsRoutes);

router.use("/deposit", depositsRoutes);

export { router };