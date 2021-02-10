class Birds {
    constructor (name,color) {
        this.breed = 'Flying creature';
        this.enviroment = 'air';
        this.name = name;
        this.color = color;
        this.sound = 'Ka ka 🐥🦜🦅🐲';
        
    }

    voice () {
        console.log(`${this.breed} ${this.name} says ${this.sound}`);
    }
    introduce () {
        console.log(`Hi, I am ${this.name} and my feather is ${this.color} and I say ${this.sound}`);
    }
    wings () {
        console.log(`Hi, I am ${this.breed} ${this.name} and I have ${this.wingcount} wings.`);
    }
    canFly(fly){
        if (!this.canfly){
            console.log(`${this.breed} ${this.name} can't fly away.😭`);
            return false;
        }
        console.log(`${this.breed} ${this.name} can fly away.✈`);
    
    }
    isBird(gender) {
        if (!this.isbird){
            console.log(`${this.breed} ${this.name} is not a bird.🐲`);
            return false;
        
        }
        console.log(`${this.breed} ${this.name} is a bird.🕊`);
    }
    
}

export { Birds }