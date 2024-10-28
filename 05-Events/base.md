## Les évènements en JavaScript

Les événements en JavaScript permettent de réagir aux actions de l'utilisateur ou à des changements dans la page. Chaque action (clic, survol, chargement de page, etc.) déclenche un événement qui peut être intercepté par JavaScript. Voici un aperçu des concepts et méthodes de base pour gérer les événements en JavaScript.

### 1. **Ajouter un Écouteur d'Événement**
La méthode la plus courante pour écouter un événement est `addEventListener`. Elle attache une fonction à exécuter lorsque l'événement spécifié se produit.

```javascript
document.getElementById("monBouton").addEventListener("click", function() {
  console.log("Bouton cliqué !");
});
```

### 2. **Les Événements Communs**
- **Événements de souris** : `click`, `dblclick`, `mouseover`, `mouseout`, `mousemove`
- **Événements de clavier** : `keydown`, `keyup`, `keypress`
- **Événements de formulaire** : `submit`, `change`, `input`
- **Événements de fenêtre** : `load` (lorsque la page est chargée), `resize` (lorsque la taille de la fenêtre change), `scroll`

### 3. **Objet `event`**
Lorsqu'un événement se produit, un objet `event` est transmis à la fonction appelée. Il contient des informations sur l'événement et ses propriétés, comme `event.type` (type d'événement) ou `event.target` (élément qui a déclenché l'événement).

```javascript
document.getElementById("monBouton").addEventListener("click", function(event) {
  console.log("Élément cliqué :", event.target);
});
```

### 4. **Propagation des Événements et `stopPropagation()`**
Quand un événement se déclenche, il "monte" à travers l'arborescence du DOM (c'est la propagation). On peut empêcher cette propagation avec `event.stopPropagation()`.

```javascript
document.getElementById("monBouton").addEventListener("click", function(event) {
  event.stopPropagation();
  console.log("Propagation arrêtée !");
});
```

### 5. **Prévenir le Comportement par Défaut**
`event.preventDefault()` empêche le comportement par défaut d'un événement, comme éviter l'envoi d'un formulaire en cliquant sur un bouton `submit`.

```javascript
document.getElementById("monFormulaire").addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("Formulaire non envoyé");
});
```

### 6. **Suppression d'un Écouteur d'Événement**
Utilisez `removeEventListener` pour détacher un écouteur d'événement. Attention, la fonction doit être nommée (non anonyme).

```javascript
function monHandler() {
  console.log("Clic détecté");
}

document.getElementById("monBouton").addEventListener("click", monHandler);
document.getElementById("monBouton").removeEventListener("click", monHandler);
```

### 7. **Gestion des Événements de manière Inline (non recommandé)**
On peut également ajouter des événements directement dans le HTML avec `onclick`, `onmouseover`, etc., mais cette approche est moins flexible et moins propre.

```html
<button onclick="alert('Clique !')">Clique-moi</button>
```

### Exemples Pratiques

#### Exemple : Survol d'une Image
```javascript
let monImage = document.getElementById("monImage");
monImage.addEventListener("mouseover", function() {
  monImage.style.border = "5px solid red";
});
monImage.addEventListener("mouseout", function() {
  monImage.style.border = "";
});
```

#### Exemple : Validation de Formulaire
```javascript
let monFormulaire = document.getElementById("form");
monFormulaire.addEventListener("submit", function(event) {
  let champ = document.getElementById("inputNom").value;
  if (champ === "") {
    event.preventDefault();
    alert("Le champ ne peut pas être vide !");
  }
});
```

### Conclusion
La gestion des événements permet de rendre une page interactive en répondant aux actions de l'utilisateur et est essentielle pour tout développement JavaScript côté client.