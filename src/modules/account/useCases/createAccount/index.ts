import { AccountsRepository } from "../../repositories/implementations/AccountsRepository";
import { CreateAccountController } from "./createAccountsController";
import { CreateAccountUseCase } from "./createAccountUseCase";

const accountsRepository = AccountsRepository.getInstance();

const createAccountUseCase = new CreateAccountUseCase(accountsRepository);

const createAccountController = new CreateAccountController (
  createAccountUseCase
);

export { createAccountController };