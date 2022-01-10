import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  cpf: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name, cpf}: IRequest): void {
    this.usersRepository.create({ name , cpf});
  }
}

export { CreateUserUseCase };