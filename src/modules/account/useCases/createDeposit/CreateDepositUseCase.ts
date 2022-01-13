import { IDepositsRepository } from "../../repositories/IDepositsRepository";

interface IRequest {
  description: string;
  amount: string;
}

class CreateDepositUseCase {
  constructor(private depositsRepository: IDepositsRepository) {}

  execute({description, amount}: IRequest): void {

    this.depositsRepository.create({description, amount});

  }
}

export { CreateDepositUseCase };