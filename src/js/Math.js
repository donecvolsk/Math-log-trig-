import { Character } from './Character';

export class AttackMath extends Character {
    constructor(name, distance, attack) {
      super(name);
      this.distance = distance;      
      this.attack = attack;
      this.stoned = true;
    }

    set stoned(value) {
        this._stoned = value;
    }

    get stoned() {
        return this._stoned;
    }
  
    set attack(value) {
        this._atack = value;
       }
    
   get attack() {
    let distanceAttack = 0;
 
    if(this.distance > 0 && this.distance < 6 ) {
        distanceAttack = this._atack * (1 - ((this.distance - 1) / 10));
        
        if(this.stoned) {
            distanceAttack -=  Math.log2(this.distance) * 5;
        } 
    }   
       return distanceAttack;
   }
  }