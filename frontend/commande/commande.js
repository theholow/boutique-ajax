import { getCheckCommande } from "../utilities/data.js";

/*-----COMMANDE----*/

/*Recuperation des données du localStorage*/
let panier = localStorage.getItem("panier")
let panierParsed = JSON.parse(panier)
let tabHT = []
let totoHT = []
/*Affichage des produits dans le panier*/
for (const produit of panierParsed) {
    getCheckCommande(produit.id, produit.color, produit.quantite, tabHT, totoHT)
}
console.log(totoHT)