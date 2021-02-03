import {Fish} from './Fish.js';

class GoldenFish extends Fish {
    constructor(name, color, grandsWishes ) {
        super (name, color);
        this.breed = 'Goldfish';       
        this.sound = 'Bul bul 🐠🐠...';
        this.grandsWishes = grandsWishes || false;
        
        //this.grandsWishes = grandsWishes ? grandsWishes : false; analogiska eilute
    }
    // voice () {
    //     console.log(`${this.breed} ${this.name} says ${this.sound}`);
    // }

    // introduce () {
    //     console.log(`Hi, I am ${this.name} and my scale is ${this.color} color and I say ${this.sound}!`);
    // }
    makeWish(wish){
        if (!this.grandsWishes){
        console.log(`${this.breed} ${this.name} doesn't grants wishes.. !`);
        return false;
    }
        console.log(`${this.breed} ${this.name} grants your wish ${wish}!`);
    }
}

export { GoldenFish }


