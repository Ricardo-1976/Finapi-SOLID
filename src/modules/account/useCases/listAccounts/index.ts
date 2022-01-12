import { ListAccountsController } from "./ListAccountsController";
import { AccountsRepository } from "../../repositories/implementations/AccountsRepository";
import { ListAccountsUseCase } from "./ListAccountUseCase";

const accountsRepository = AccountsRepository.getInstance();
const listAccountsUseCase = new ListAccountsUseCase(accountsRepository);
const listAccountsController = new ListAccountsController(listAccountsUseCase);

export { listAccountsController };