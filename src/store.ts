import { action, observable } from "mobx";

export type User = {
  name: string;
  age: number;
};

class Store {
  @observable user?: User;
  @action.bound init() {
    this.user = {
      name: "grapgrap",
      age: 1
    };
  }
  @action.bound increase() {
    if (this.user?.age) {
      this.user.age = this.user.age + 1;
    }
    console.log("increased");
  }
}

export const store = new Store();
