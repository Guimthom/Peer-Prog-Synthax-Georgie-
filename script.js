'use strict';

const age = Math.floor(Math.random() * 50);

// [1] créer une variable name, et lui assigner un nom
let name = "Georgi";

// [2] si age est plus grand que 18, afficher le message suivant
const msg1 = 'Tiens voila ta bière car tu as ' + age + 'ans';
if (age >= 18) {
    console.log(msg1);
}else{
  console.log("Déso t'as " + age + "ans")
}

/* Inverse la condition /
// if (!(age > 18)) {
//     console.log(msg1);
// }

// [3] si age n'est pas entre 12 et 25, afficher le message suivant:
const msg2 = "Vous n'avez pas le droit à la carte 12-25";
if (age < 12 || age > 25) {
    console.log(msg2);
}


// [4] si age est plus grand que 20, réassigner name en lui ajoutant 'Mr' (ou 'Mme') devant
if (age > 20) {
name = 'Mme' + name
    console.log(name);
}


// OU 
const ageNew = 30;

// [1] créer une variable name, et lui assigner un nom
const person = {
  age: 22,
  name: "Toto",
  genre: "licorne"
}

// let name = "Georgi";

// [2] si age est plus grand que 18, afficher le message suivant
const msg1New = 'Bravo pour le permis';
if (person.ageNew > 18) {
  console.log(msg1New);
}
/ Inverse la condition */
// if (!(age > 18)) {
//     console.log(msg1);
// }

// [3] si age n'est pas entre 12 et 25, afficher le message suivant:
/* const msg2New = "Vous n'avez pas le droit à la carte 12-25";
if (person.ageNew < 12 || age > 25) {
  console.log(msg2New);
} */

// [4] si age est plus grand que 20, réassigner name en lui ajoutant 'Mr' (ou 'Mme') devant
/* if (person.genre === 'Licorne') {
  person.name = Mr $(person.name)
} else if (person.genre === 'Female') {
  person.name = Mr $(person.name)
} else {
  person.name = Undefined $(person.name)
} */