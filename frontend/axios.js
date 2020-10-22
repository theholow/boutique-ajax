import{getData,createdDisplay,createCard} from "home/home.js"
import{oneData,createOptions} from "produit/produit.js"


/*home*/
createdDisplay(array);
createCard(id, name, description, price, img)
getData();

/*produit*/
createOptions(array);

let urlcourante = document.location.href;
let url = new URL(urlcourante);
let search_params = new URLSearchParams(url.search);
let ids = search_params.get('id');

oneData(ids);





