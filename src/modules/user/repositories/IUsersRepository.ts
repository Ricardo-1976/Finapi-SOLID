interface ICreateUserDTO {
  name: string;
  cpf: string;
}

interface IUsersRepository {
  create({name, cpf}: ICreateUserDTO): void;
}

export { IUsersRepository , ICreateUserDTO }