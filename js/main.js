import {Dog} from './components/Dog.js';
import {Cat} from './components/Cat.js';
import {Hamster} from './components/Hamster.js';
import {Pet} from './components/Pet.js';
import {Nemo} from './components/Nemo.js';


const rexas = new Dog('Rexas', 'brown');
const rikis = new Dog('Rikis', 'white');
const pukis = new Cat('Pukis', 'white and brown')
const jorkis = new Hamster('Jorkis','golden')
const nemo = new Nemo('Nemo', 'blue')

console.log(rexas);
console.log(nemo);

rexas.voice();


rexas.introduce();
rikis.introduce();
pukis.introduce();
jorkis.introduce();
nemo.introduce();

