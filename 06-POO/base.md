## La POO en JavaScript

La Programmation Orientée Objet (POO) en JavaScript est un paradigme de programmation qui permet de structurer le code en utilisant des objets. Les objets contiennent des propriétés (variables) et des méthodes (fonctions) pour manipuler ces propriétés. 

### 1. **Création d'un Objet**
En JavaScript, on peut créer des objets de plusieurs façons. Voici deux méthodes courantes :

- **Littéraux d’objets** :
    ```javascript
    let voiture = {
        marque: "Toyota",
        modèle: "Corolla",
        démarrer: function() {
            console.log("La voiture démarre");
        }
    };
    voiture.démarrer(); // Affiche "La voiture démarre"
    ```

- **Constructeurs de fonctions** :
    ```javascript
    function Voiture(marque, modèle) {
        this.marque = marque;
        this.modèle = modèle;
        this.démarrer = function() {
            console.log("La voiture démarre");
        };
    }
    let maVoiture = new Voiture("Toyota", "Corolla");
    ```

### 2. **Classes**
Les classes simplifient la création d’objets en tant que "moule" pour créer des instances avec des propriétés et des méthodes. 

```javascript
class Voiture {
    constructor(marque, modèle) {
        this.marque = marque;
        this.modèle = modèle;
    }
    démarrer() {
        console.log("La voiture démarre");
    }
}
let maVoiture = new Voiture("Toyota", "Corolla");
```

### 3. **Encapsulation**
L'encapsulation permet de protéger les données et de limiter leur accès en utilisant des méthodes pour interagir avec les propriétés privées. Dans JavaScript, on utilise le symbole `#` pour créer des propriétés privées :

```javascript
class CompteBancaire {
    #solde = 0; // Propriété privée
    déposer(montant) {
        if (montant > 0) this.#solde += montant;
    }
    obtenirSolde() {
        return this.#solde;
    }
}
```

### 4. **Héritage**
L'héritage permet à une classe d'hériter des propriétés et méthodes d'une autre classe avec le mot-clé `extends`.

```javascript
class Véhicule {
    constructor(marque) {
        this.marque = marque;
    }
    démarrer() {
        console.log("Le véhicule démarre");
    }
}
class Moto extends Véhicule {
    conduire() {
        console.log("La moto roule");
    }
}
let maMoto = new Moto("Honda");
maMoto.démarrer(); // Hérite de la méthode démarrer
```

### 5. **Polymorphisme**
Le polymorphisme permet de redéfinir des méthodes dans une classe dérivée.

```javascript
class Véhicule {
    démarrer() {
        console.log("Le véhicule démarre");
    }
}
class Voiture extends Véhicule {
    démarrer() {
        console.log("La voiture démarre silencieusement");
    }
}
let maVoiture = new Voiture();
maVoiture.démarrer(); // Affiche "La voiture démarre silencieusement"
```

### 6. **Méthodes Statiques**
Les méthodes statiques appartiennent à la classe et non aux instances de celle-ci. Elles sont utiles pour des fonctionnalités globales qui ne dépendent pas d'objets particuliers.

```javascript
class Calculatrice {
    static addition(a, b) {
        return a + b;
    }
}
console.log(Calculatrice.addition(3, 4)); // Affiche 7
```

La POO en JavaScript permet de structurer le code de façon modulaire et maintenable, ce qui est particulièrement utile pour les projets complexes.