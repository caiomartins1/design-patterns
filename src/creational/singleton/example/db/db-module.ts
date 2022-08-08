import { User } from '../model/user';

const users: User[] = [];

export const dbModule = {
  addUser(user: User): void {
    users.push(user);
  },

  removeUser(index: number): void {
    users.splice(index, 1);
  },

  print(): void {
    for (const user of users) {
      console.log(user.name, user.age);
    }
  },
};
