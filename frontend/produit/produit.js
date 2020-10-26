import * as data from '../utilities/data.js';
import * as display from '../utilities/display.js';

let panier = display.dataPanier()

//localStorage.clear()

/*Recuperation de l'id dans l'URL*/
let urlcourante = document.location.href;
let url = new URL(urlcourante);
let search_params = new URLSearchParams(url.search);
let ids = search_params.get('id');

/*Affichage du produit dans la page produit*/

data.oneData(ids, panier);

















