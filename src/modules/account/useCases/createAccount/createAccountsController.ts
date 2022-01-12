import { Response, Request, response } from "express";

import { CreateAccountUseCase } from "./createAccountUseCase";

class CreateAccountController {

  constructor(private createAccountUseCase: CreateAccountUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, cpf } = request.body;

    this.createAccountUseCase.execute({ name, cpf });

    return response.status(201).send();
  }
}

export { CreateAccountController };