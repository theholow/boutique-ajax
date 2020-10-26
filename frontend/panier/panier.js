/*-----PANIER----*/
import * as data from '../utilities/data.js';

/*Recuperation des données du localStorage*/
let panier = localStorage.getItem("panier")
let panierParsed = JSON.parse(panier)

/*Affichage des produits dans le panier*/
for (const produit of panierParsed) {
    data.getDataForBasketDisplay(produit.id, produit.quantite, produit.color)
}