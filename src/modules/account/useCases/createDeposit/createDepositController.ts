import { Response, Request } from "express";

import { CreateDepositUseCase } from "./CreateDepositUseCase";

class CreateDepositController {

  constructor(private createDepositUseCase: CreateDepositUseCase) {}

  handle(request: Request, response: Response): Response {
    const { description, amount } = request.body;

    this.createDepositUseCase.execute({ description, amount });

    return response.status(201).send();
  }
}

export { CreateDepositController };