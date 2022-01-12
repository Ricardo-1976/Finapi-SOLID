import { Request, Response } from "express";

import { ListAccountsUseCase } from "./ListAccountUseCase";

class ListAccountsController {

  constructor(private listAccountsUseCase: ListAccountsUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listAccountsUseCase.execute();

    return response.json(all);
  }
}

export { ListAccountsController };