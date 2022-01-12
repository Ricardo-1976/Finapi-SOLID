import { Account } from "../../model/account";
import { IAccountsRepository , ICreateAccountDTO } from "../IAccountsRepository";

class AccountsRepository implements AccountsRepository {
  private accounts: Account[];

  private static INSTANCE: AccountsRepository;

  private constructor() {
    this.accounts = [];
  }

  public static getInstance(): AccountsRepository {
    if(!AccountsRepository.INSTANCE) {
      AccountsRepository.INSTANCE = new AccountsRepository();
    }
    return AccountsRepository.INSTANCE;
  }

  // create Account
  create({ name, cpf }: ICreateAccountDTO): void {
    const account = new Account();

    Object.assign(account, {
      name,
      cpf,
      created_at: new Date(),
    });

    this.accounts.push(account);
    console.log(account);
  }

   //List Account
  list(): Account[] {
    return this.accounts;
  }
}
 
export { AccountsRepository };
