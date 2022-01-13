import { DepositsRepository } from "../../repositories/implementations/DepositRepository";
import { CreateDepositController } from "./createDepositController";
import { CreateDepositUseCase } from "./CreateDepositUseCase";

const depositsRepository = DepositsRepository.getInstance();

const createDepositUseCase = new CreateDepositUseCase(depositsRepository);

const createDepositController = new CreateDepositController(
  createDepositUseCase
);

export { createDepositController };
