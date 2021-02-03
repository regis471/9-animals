class Nemo {
    constructor(name, color) {
        this.breed = 'Nemo'
        this.name = name;
        this.enviroment = 'water';
        this.color = color;
        this.sound = 'Bul bul 🐟🐟...'
    }
    voice () {
        console.log(`${this.breed} ${this.name} says ${this.sound}`);
    }

    introduce () {
        console.log(`Hi, I am ${this.name} and my scale is ${this.color} color and I say ${this.sound}!`);
    }
}

export { Nemo }