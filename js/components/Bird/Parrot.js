import { Birds } from '../Birds.js';

class Parrot extends Birds {
    constructor(name,color) {
        super(name,color)
        this.breed = 'Parrot';
        this.sound = 'Ka tu?🦜🦜';
        this.wingcount = 2;
        this.canfly = true;
        this.isbird = true;
    
    }

    voice () {
        console.log(`${this.breed} ${this.name} says ${this.sound}`);
    }
    introduce () {
        console.log(`Hi, I am ${this.name} and my feathers is ${this.color} and I say ${this.sound}!`);
    }
}

export { Parrot }