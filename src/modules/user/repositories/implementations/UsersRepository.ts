import { User } from "../../model/user";
import { IUsersRepository , ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if(!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }
    return UsersRepository.INSTANCE;
  }

  // create User
  create({ name, cpf }: ICreateUserDTO): void {
    const user = new User();

    Object.assign(user, {
      name,
      cpf,
      created_at: new Date(),
    });

    this.users.push(user);
  }
}

export { UsersRepository };
