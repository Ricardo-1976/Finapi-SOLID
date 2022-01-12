import { IAccountsRepository } from "../../repositories/IAccountsRepository";

interface IRequest {
  name: string;
  cpf: string;
}

class CreateAccountUseCase {
  constructor(private accountsRepository: IAccountsRepository) {}

  execute({ name, cpf}: IRequest): void {
    this.accountsRepository.create({ name , cpf});
  }
}

export { CreateAccountUseCase };