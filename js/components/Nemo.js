import {Fish} from './Fish.js';

class Nemo extends Fish{
    constructor(name, color) {
        super(name, color);
        this.breed = ' Small Fish';        
        this.sound = 'Bul bul 🐟🐟...'
    }
    // voice () {
    //     console.log(`${this.breed} ${this.name} says ${this.sound}`);
    // }

    // introduce () {
    //     console.log(`Hi, I am ${this.name} and my scale is ${this.color} color and I say ${this.sound}!`);
    // }
}

export { Nemo }


