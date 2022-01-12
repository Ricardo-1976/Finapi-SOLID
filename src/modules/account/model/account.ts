import { v4 as uuidV4 } from  "uuid";

class Account {
  id?: string;
  name: string; 
  cpf: string;
  statement: [];
  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Account };