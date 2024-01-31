# Préliminaires

> Quelques outils de base

Quel que soit le langage de programmation, écrire du code signifie toujours écrire des instructions que l'on veut faire exécuter à une machine.

## Résolution de l'exercice

- Remplacer les **var** par des **let**
*Est-ce que le mot clé var est obsolète et peux toujours être remplacé par le mot clé let ?*

- Remplacer **12** par **nbMois**

- Remplacer **let** par **Const** quand la valeur ne change pas


**CORRECTION CHATGPT**

let argent = 1000;
console.log('Argent initial :', argent);

const nbGlaces = 8;
let prixGlace = 2;
const argentDePocheMensuel = 100;
const nbMois = 12;
const inflation = 0.04;
const crashBancaire = 5;

// Acheter des glaces
argent -= nbGlaces * prixGlace;
console.log(`Argent après l'achat de glaces : ${argent}`);

// Réinitialiser le nombre de glaces
argent += nbGlaces * prixGlace;
console.log(`Argent après réinitialisation du nombre de glaces : ${argent}`);

// Appliquer l'inflation au prix des glaces
prixGlace *= (1 + inflation);
console.log('Prix de la glace après inflation :', prixGlace);

// Ajouter l'argent de poche mensuel pour une année
argent += argentDePocheMensuel * nbMois;
console.log(`Argent après ajout de l'argent de poche annuel : ${argent}`);

// Simuler un crash bancaire
argent /= crashBancaire;
console.log(`Argent après un crash bancaire : ${argent}`);
