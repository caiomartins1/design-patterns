import { User } from '../model/user';

export class DbClassic {
  private static _instance: DbClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  public static getInstance(): DbClassic {
    if (DbClassic._instance == null) {
      DbClassic._instance = new DbClassic();
    }

    return DbClassic._instance;
  }

  public addUser(user: User): void {
    this.users.push(user);
  }

  public removeUser(index: number): void {
    this.users.splice(index, 1);
  }

  public print(): void {
    for (const user of this.users) {
      console.log(user.name, user.age);
    }
  }
}
