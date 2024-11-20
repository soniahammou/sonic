
import { cardDesign } from "./carddesign.js";
import { theme } from "./theme.js";
import { slider } from "./slider.js";
import { categorieAdd } from "./ajout-categorie-alerte.js";
import { newsletter } from "./newsletter.js";

import { triePersonnages } from "./trie-personnages.js";

const app = {

    init: function () {
        newsletter.init();

        slider.init();
     

        const btn = document.querySelector(".main_select-type .btn");
        if (btn) {
            categorieAdd.init();
        } else {
            console.log("Aucun élément avec la classe .categorie n'a été trouvé sur la page.");
        }

        theme.init();
        triePersonnages.init();
        cardDesign.init();




    }
}

document.addEventListener('DOMContentLoaded', app.init);
