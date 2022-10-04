
//===================Faire un prompt pour renseigner le nom du joueur==================

let nom = prompt("Entrez votre nom et Prénom: ");


//===================Générer un nombre au hasard compris entre 0 et 100==================



let cible = Math.floor(Math.random() * 100) + 1;
let nombre, compteur;
for (compteur=1; compteur<=10; compteur+=1) { //utiliser un for pour limiter le nombre de fois jouer, ici on limite a 10 fois
    nombre = parseInt(prompt("Bienvenue au jeu du Juste Prix !, donnez un nombre entre 0 et 100:"),10); //générer un prompt pour que le joueur tape un nombre entre 0 et 100

    if (nombre === cible) { //si le nombre est le bon
        break; //break pour casser la boucle ou l'instruction en cours, si le résultat est le bon c'est le message d'alerte en dessous de l'instruction qui prend le relais
    }

    if (nombre > cible) { // si le nombre choisi est plus grand que la cible recherchée
        alert("trop grand"); // un message d'alerte s'affiche : trop grand, il faut donc réessayer
    } 

    if (nombre < cible) { // si le nombre choisi est plus petit que la cible recherchée
        alert("trop petit"); // un message d'alerte s'affiche : trop petit, il faut donc réessayer
    }
    
    else {
        alert("ce n'est pas un chiffre"); //si on ne donne pas un chiffre mais des lettre alors ce message s'affiche : ce n'est pas un chiffre, et il faudra réessayé
        compteur-=1;
    }
}
alert("c'est gagné! vous remportez ce magnifique chameau malade, d'une valeur de :" +cible); //message quand c'est gagné



/* 
il faut maintenant à réussir à :
    *faire une présentation correcte avec des sections, div... 
    *intégrer un design animé
    *faire un compteur du nombre d'essai sur 10
    *afficher le nombre gagnant en vert et le nombre perdant en rouge
    *utiliser un choix multiple pour choisir le lot à gagner
*/
