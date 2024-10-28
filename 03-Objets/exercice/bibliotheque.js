// Exercice 13
console.info(">>>>> Exercice 13");

let bibliotheque = {
    livres: [],
  
    ajouterLivre: function(titre, auteur, pages) {
      let livre = { titre: titre, auteur: auteur, pages: pages };
      this.livres.push(livre);
    },
  
    afficherLivres: function() {
      this.livres.forEach(livre => {
        console.log(`Titre: ${livre.titre}, Auteur: ${livre.auteur}, Pages: ${livre.pages}`);
      });
    },
  
    trouverLivre: function(titre) {
      let livreTrouvé = this.livres.find(livre => livre.titre === titre);
      return livreTrouvé || null;
    },
  
    supprimerLivre: function(titre) {
      this.livres = this.livres.filter(livre => livre.titre !== titre);
    }
};
  
// Test des méthodes de bibliothèque
bibliotheque.ajouterLivre("Les Misérables", "Victor Hugo", 1200);
bibliotheque.ajouterLivre("1984", "George Orwell", 328);

bibliotheque.afficherLivres();

let livre = bibliotheque.trouverLivre("1984");
console.log(livre);

bibliotheque.supprimerLivre("1984");
bibliotheque.afficherLivres();
  