import {Dog} from './components/Dog.js';
import {Cat} from './components/Cat.js';
import {Hamster} from './components/Hamster.js';
import {Nemo} from './components/Nemo.js';
import {GoldenFish} from './components/GoldenFish.js';


const rexas = new Dog('Rexas', 'brown');
const rikis = new Dog('Rikis', 'white');
const pukis = new Cat('Pukis', 'white and brown');
const jorkis = new Hamster('Jorkis','golden');
const nemo = new Nemo('Nemo', 'blue');
const golden = new GoldenFish('Goldenas', 'gold',  );

console.log(rexas);
console.log(nemo);
console.log(golden);

rexas.voice();
jorkis.voice();
nemo.voice();


rexas.introduce();
rikis.introduce();
pukis.introduce();
jorkis.introduce();
nemo.introduce();
golden.introduce();
golden.makeWish('Gyvo drakono');

/* PROJEKTO IDEJA
Animal.js (params: name, color, sound; methods: voice(), introduce();)

    Pet.js (viska paveldi is Animal.js)
        Dog.js (viska paveldi is Pet.js)
        Cat.js (viska paveldi is Pet.js)
        Hamster.js (viska paveldi is Pet.js; params: canEatTillDeath)

    Bird.js (viska paveldi is Animal.js; params: wingsCount, canFly; methods: flyAway();)
        Chicken.js (viska paveldi is Bird.js)
        Parrot.js (viska paveldi is Bird.js)
        Eagle.js (viska paveldi is Bird.js)
        Dragonfly.js (viska paveldi is Bird.js; params: imposter=true;)
        
    Fish.js (viska paveldi is Animal.js; params: canSwim; methods: swimAway();)
        Goldfish.js (viska paveldi is Fish.js; params: grantsWishes; methods: makeWish();)
        Nemo.js (viska paveldi is Fish.js)
*/