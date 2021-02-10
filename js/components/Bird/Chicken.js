import { Birds} from '../Birds.js';

class Chicken extends Birds{
    constructor(name,color) {
        super (name, color)
        this.breed = 'Chicken';
        this.sound = 'Put put🐥🐥';
        this.wingcount = 2;
        this.canfly = false;
        this.isbird = true;
    
    }

    voice () {
        console.log(`${this.breed} ${this.name} says ${this.sound}`);
    }
    introduce () {
        console.log(`Hi, I am ${this.name} and my feathers is ${this.color} and I say ${this.sound}!`);
    }
    
    
}

export { Chicken }