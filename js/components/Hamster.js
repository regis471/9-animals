import {Pet} from './Pet.js';

class Hamster extends Pet{
    constructor(name, color) {
        super(name, color)
        this.breed = 'Hamster';
        this.sound = 'nom nom!🐹🐹';
        this.caneatTillDeath = true;

    }
    //ZIURETI DOG JS
    // voice () {
    //     console.log(`${this.name} says ${this.sound}`);
    // }

    // introduce () {
    //     console.log(`Hi, I am ${this.name} and my fur is ${this.color} color and I say ${this.sound}!`);
    // }
}

export { Hamster }