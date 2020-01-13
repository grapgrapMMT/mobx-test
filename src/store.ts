import { action, observable } from "mobx";

export type User = {
  name: {
    type: string;
    value: string;
  };
  age: {
    type: string;
    value: number;
  };
};

class Store {
  @observable user?: User;
  @action.bound init() {
    this.user = {
      name: {
        type: "full",
        value: "grapgrap"
      },
      age: {
        type: "korean",
        value: 1
      }
    };
  }
  @action.bound reset() {
    if (this.user) {
      this.user.name.value = "raprap";
      this.user.age.value = 1;
    } else {
      this.init();
    }
  }
  @action.bound increase() {
    if (this.user?.age) {
      this.user.age.value = this.user.age.value + 1;
    }
    console.log("increased");
  }
}

export const store = new Store();
