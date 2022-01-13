import { Deposit } from "../../model/deposit";
import { ICreateAccountDTO } from "../IAccountsRepository";
import { IDepositsRepository, ICreateDepositDTO } from "../IDepositsRepository";

class DepositsRepository implements IDepositsRepository {
  private deposits: Deposit[];

  private static INSTANCE: DepositsRepository;

  private constructor() {
    this.deposits = [];
  }

  public static getInstance(): DepositsRepository {
    if(!DepositsRepository) {
      DepositsRepository.INSTANCE = new DepositsRepository();
    }
    return DepositsRepository.INSTANCE;
  }

  //Create Deposit
  create({description, amount}: ICreateDepositDTO): void {
    const deposit = new Deposit();

    Object.assign(deposit, {
      description,
      amount,
      creatd_at: new Date(),
      type: "credit",
    });

    this.deposits.push(deposit);

    console.log(deposit);

  }

  //
}

export { DepositsRepository };