import {Pet} from './Pet.js';

class Dog extends Pet{
    constructor(name, color) {
        super(name, color);
        this.breed = 'Dog';
        this.sound = 'Au au!🐕‍🦺🐕‍🦺';

    }
    // PAVYZDYS TAIKANT VIENAM OBJEKTUI
    // voice () {
    //     console.log(`${this.name} says ${this.sound}`);
    // }

    // introduce () {
    //     console.log(`Hi, I am ${this.name} and my fur is ${this.color} color and I say ${this.sound}!`);
    // }
}

export { Dog }