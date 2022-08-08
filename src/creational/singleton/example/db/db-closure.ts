import { User } from '../model/user';

export const db = (() => {
  const users: User[] = [];

  return {
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
})();
