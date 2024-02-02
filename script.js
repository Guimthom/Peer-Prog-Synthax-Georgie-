'use strict';

const age = Math.floor(Math.random() * 50);

// [1] créer une variable name, et lui assigner un nom
let name = "Georgie";

// [2] si age est plus grand que 18, afficher le message suivant
const msg1 = 'Tiens voila ta bière car tu as ' + age + 'ans';
if (age > 18) {
    console.log(msg1);
}else{
  console.log("Déso t'as " + age + "ans")
}

// Inverse la condition 
 if (!(age > 18)) {
    console.log(msg1);
 }

// [3] si age n'est pas entre 12 et 25, afficher le message suivant:
const msg2 = "Vous n'avez pas le droit à la carte 12-25";
if ( age < 12 || age > 25){
console.log(msg2 + "car tu as " + age + "ans")
}else{
console.log("c'est bon t'as la carte")
}


// [4] si age est plus grand que 20, réassigner name en lui ajoutant 'Mr' (ou 'Mme') devant
if (age > 20) {
name = 'Mme ' + name;
    console.log(name);
}else{
  console.log("déso petite " + name)
}

// Besoin d'instructions

const person = {
  age: 22,
  name: "Toto",
  genre: "Licorne"
}
console.log(person);

 if (person.genre === 'Licorne') {
  person.name = `Mr ${person.name}`;
  
} else if (person.genre === 'Female') {
  person.name = `Mlle ${person.name}`;
  console.log(person.name);
} else {
  person.name = `Undefined ${person.name}`;
} 
