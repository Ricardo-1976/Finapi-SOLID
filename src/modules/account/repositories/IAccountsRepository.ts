import { Account } from "../model/account";

interface ICreateAccountDTO {
  name: string;
  cpf: string;
}

interface IAccountsRepository {
  create({name, cpf}: ICreateAccountDTO): void;
  list(): Account[];
}

export { IAccountsRepository , ICreateAccountDTO }