// Améliorez ce code

let nameEnfant = 'Georgie';
let argent = 1000;
let nbGlaces = 8;
let prixGlace = 2;

console.log('Argent', argent);


argent = argent - nbGlaces * prixGlace;
console.log('Argent', argent);

nbGlaces = 0;
console.log('Argent', argent);


const inflation = 0.04;

prixGlace = prixGlace * (1 + inflation);
console.log('Inflation', prixGlace);


const argentDePoche = 100;
const nbMois = 12;

argent = argent + argentDePoche * nbMois;
console.log('Argent', argent);

const crashBancaire = 5;

argent = argent / crashBancaire;
console.log('Argent', argent);
