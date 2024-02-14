
import { Daemon } from './Daemon';
import { Magician } from './Magician';

const user1 = new Daemon('demon', 2, 100, false);
console.log(user1);
console.log(user1.attack);

const user2 = new Magician('mag', 2, 100, true);
console.log(user2);
console.log(user2.attack);


