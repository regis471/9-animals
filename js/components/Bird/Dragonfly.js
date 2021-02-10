import { Birds} from '../Birds.js';

class Dragonfly extends Birds{
    constructor(name,color) {
        super(name, color);
        this.breed = 'Dragonfly';
        this.sound = 'Bzm bzm 🐲🐲';
        this.wingcount = 6;
        this.canfly = true;
        this.isbird = false;
    
    }

    voice () {
        console.log(`${this.breed} ${this.name} says ${this.sound}`);
    }
    introduce () {
        console.log(`Hi, I am ${this.name} and my wings is ${this.color} and I say ${this.sound}!`);
    }
    
}

export { Dragonfly }