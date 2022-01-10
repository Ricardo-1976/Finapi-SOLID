import { Response, Request, response } from "express";

import { CreateUserUseCase } from "./createUserUseCase";

class CreateUserController {

  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, cpf } = request.body;

    this.createUserUseCase.execute({ name, cpf });

    return response.status(201).send();
  }
}

export { CreateUserController };