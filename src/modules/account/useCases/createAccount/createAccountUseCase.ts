import { IAccountsRepository } from "../../repositories/IAccountsRepository";

interface IRequest {
  name: string;
  cpf: string;
}

class CreateAccountUseCase {
  constructor(private accountsRepository: IAccountsRepository) {}

  execute({ name, cpf}: IRequest): void {
    const accountAlreadyExists = this.accountsRepository.findByName(cpf);

    if(accountAlreadyExists) {
      throw new Error("Account Already Exists!")
    }
    this.accountsRepository.create({ name , cpf});
  }
}

export { CreateAccountUseCase };