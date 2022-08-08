import { DbClassic } from './db/db-classic';
import './module_1';

const db = DbClassic.getInstance();
db.addUser({ name: 'Test4', age: 20 });
db.addUser({ name: 'Test5', age: 22 });
db.addUser({ name: 'Test6', age: 23 });
db.print();
