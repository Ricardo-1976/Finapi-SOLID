import { Account } from "../../model/account";
import { IAccountsRepository } from "../../repositories/IAccountsRepository";

class ListAccountsUseCase {

  constructor(private accountsRepository: IAccountsRepository) {}

  execute(): Account[] {
    const  accounts = this.accountsRepository.list();

    return accounts;
  }
}

export { ListAccountsUseCase }