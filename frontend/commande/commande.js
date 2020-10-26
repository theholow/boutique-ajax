import {getCheckCommande} from "../utilities/data.js";

/*-----COMMANDE----*/

/*Recuperation des données du localStorage*/
let panier = localStorage.getItem("panier")
let panierParsed = JSON.parse(panier)

/*Affichage des produits dans le panier*/
for (const produit of panierParsed) {
    getCheckCommande(produit.id, produit.quantite, produit.color)
}

getCheckCommande()