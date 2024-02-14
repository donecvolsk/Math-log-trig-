import { AttackMath } from './Math';

export class Magician extends AttackMath {
    constructor(name, distance, attack, stoned) {
        super(name, distance, attack);      
        this.stoned = stoned;
        this.type = "magican";
      }
}