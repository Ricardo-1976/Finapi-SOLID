import { Deposit } from "../model/deposit";

interface ICreateDepositDTO {
  description: string;
  amount: string;
}

interface IDepositsRepository {
  create({ description, amount }: ICreateDepositDTO): void;
}

export { IDepositsRepository, ICreateDepositDTO };