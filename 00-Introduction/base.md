## Initiation à JavaScript

**JavaScript** est un langage de programmation utilisé pour rendre les pages web interactives. Voici les bases pour débuter.

### 1. **Variables**
Les variables permettent de stocker des valeurs.

```javascript
let nom = "John";  // Peut être modifié
const age = 25;    // Ne peut pas être modifié
```

### 2. **Types de données**
- **String** : Chaîne de caractères (`"Hello"`)
- **Number** : Nombres (`42`)
- **Boolean** : Valeurs vraies/faux (`true` ou `false`)
- **Array** : Liste de valeurs (`[1, 2, 3]`)

### 3. **Conditions**
Permettent d'exécuter du code en fonction de certaines conditions.

```javascript
if (age > 18) {
  console.log("Adulte");
} else {
  console.log("Mineur");
}
```

### 4. **Boucles**
Permettent de répéter du code plusieurs fois.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### 5. **Fonctions**
Un bloc de code réutilisable.

```javascript
function salut(nom) {
  return `Salut, ${nom}!`;
}

console.log(salut("Alice"));  // Affiche "Salut, Alice!"
```

### 6. **Manipulation du DOM**
JavaScript permet d'interagir avec la page web (DOM).

```javascript
document.getElementById("monElement").innerHTML = "Texte modifié!";
```

### 7. **Événements**
Pour réagir à des actions de l'utilisateur.

```javascript
document.getElementById("monBouton").addEventListener("click", function() {
  alert("Bouton cliqué !");
});
```