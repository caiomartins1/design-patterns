import { DbClassic } from './db/db-classic';

const db = DbClassic.getInstance();
db.addUser({ name: 'Test1', age: 20 });
db.addUser({ name: 'Test2', age: 22 });
db.addUser({ name: 'Test3', age: 23 });
db.removeUser(0);
db.print();
