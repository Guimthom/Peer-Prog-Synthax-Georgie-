// Améliorez ce code

let argent = 1000;

let nbGlaces = 8;
let prixGlace = 2;

argent = argent - nbGlaces * prixGlace;
nbGlaces = 0;

let inflation = 0.04;

prixGlace = prixGlace * (1 + inflation);

let argentDePoche = 100;
let nbMois = 12;

argent = argent + argentDePoche * 12;

let crashBancaire = 5;

argent = argent / crashBancaire;

console.log('Argent', argent);