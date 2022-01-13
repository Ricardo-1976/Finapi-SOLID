import { v4 as uuidV4 } from  "uuid";

class Deposit {
  id?: string;
  description;
  amount;
  creatd_at: Date;
  type: "credit";

  constructor() {
    if(!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Deposit };