## Hoisting

Le **hoisting** (ou "remontée" en français) est un comportement en JavaScript où les déclarations de variables et de fonctions sont déplacées en haut de leur contexte d'exécution (scope) avant l'exécution du code.

Cela signifie que les déclarations de variables `var` et les fonctions peuvent être utilisées avant même d'être définies dans le code.

### Exemple :

```javascript
console.log(maFonction()); // Fonction appelée avant d'être déclarée

function maFonction() {
  return "Bonjour!";
}
```

Dans cet exemple, grâce au **hoisting**, la fonction peut être appelée avant sa définition.

Cependant, les déclarations avec `let` et `const` ne sont pas affectées par le **hoisting** de la même manière. Les variables déclarées avec `let` ou `const` sont dans une "zone temporaire morte" jusqu'à ce que leur déclaration soit réellement exécutée.

### Exemple avec `let` :

```javascript
console.log(x);  // ReferenceError: Cannot access 'x' before initialization
let x = 5;
```

Ici, contrairement à `var`, l’utilisation de `let` avant la déclaration provoque une erreur.