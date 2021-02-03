import {Pet} from './Pet.js';

class Cat extends Pet{
    constructor(name, color) {
        super(name, color);
        this.breed = 'Cat';        
        this.sound = 'Miau miau!🐱‍👓🐱‍👓';

    }

    // voice () {
    //     console.log(`${this.name} says ${this.sound}`);
    // }

    // introduce () {
    //     console.log(`Hi, I am ${this.name} and my fur is ${this.color} color and I say ${this.sound}`);
    // }
}

export { Cat }