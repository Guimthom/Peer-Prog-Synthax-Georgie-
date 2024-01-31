# Conditions

> Différencier notre logique selon les cas

Il est souvent nécessaire d'exécuter des instructions différentes selon certaines conditions particulières.

Pour cela, il faut être capable de comparer des valeurs.

## Comparer des valeurs

Les opérateurs de comparaison permettent de comparer des valeurs, et **renvoient
un booléen**.

> Un booléen est une valeur représentant "vrai" (`true`) ou "faux" (`false`).

```js
const x = 2

// supérieur
x > 1;
x >= 1;

// inférieur
x < 1;
x <= 1;

// égal
x === 1;
x !== 1;
```

> Comparer des *strings* se fait selon l'ordre alphanumérique.

Il est également possible d'inverser des valeurs booléennes, avec `!`.

```js
const x = 3;

const isPositive = x >= 0; // true
const isNegative = !isPositive; // false
```

## Et / ou

```js
const x = 3;

x > 3 && x < 10 // ET
x > 3 || x > 30 // OU
```

## [Conditions](https://dorey.github.io/JavaScript-Equality-Table/)

Les conditions permettent d'exécuter du code particulier seulement dans certains
cas.

```js
if (age === 1) {
  // age vaut 1
  console.log("J'ai 1 an !");
} else if (age === 2) {
  // x ne vaut pas 1 et vaut 2
  console.log("J'ai 2 ans !");
} else {
  // x ne vaut ni 1 ni 2
  console.log("Je ne sais pas compter plus loin que 2...");
}
```


Le code à l'intérieur d'un block `if` ne s'exécutera que si la condition associée est "vraie".

```js
if (maCondition) {
  // ne s'exécute que si maCondition est vraie
}
```

Si on a besoin que d'une seule instruction, il est également possible d'écrire des conditions sans blocks.

```js
if (age === 1) console.log("J'ai 1 an !");
else if (age === 2) console.log("J'ai 2 ans !");
else console.log("Je ne sais pas compter plus loin que 2...");
```

### "Truthy" vs "Falsy"

En réalité, le code à l'intérieur d'un block `if` ne s'exécutera que si la condition associée est "truthy".

```js
if (maCondition) {
  // ne s'exécute que si maCondition est truthy
}
```

Une valeur "truthy" est une valeur non "falsy". Les valeurs "falsy" sont:
```js
false
0
... (60 lignes restantes)