import { request, response, Router } from "express";

import { createUserController } from "../modules/user/useCases/createUser";

const usersRoutes = Router();

// Create User
usersRoutes.post("/", (request, response) => {
  return createUserController.handle(request, response);
})

export { usersRoutes };