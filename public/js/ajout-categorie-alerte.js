import { alert } from "./alert.js";

export const categorieAdd = {


    //propriete du bouton de fermeture d'alerte
     divEL : null,
     closeBtn : null,


    init: function () {
        // alert.bind();
        categorieAdd.bind();

    },

    bind: function () {

        const btn = document.querySelector(".main_select-type .btn");
        btn.addEventListener("click", categorieAdd.handleAlerte);

        //ecouteur pour le bouton de fermeture de l'alert
        alert.createBtn('.filters');
        alert.closeBtn.addEventListener("click", alert.alertButon);
    },

    handleAlerte:function(event){

        event.preventDefault();
        const divEL = document.querySelector(".filters")

        alert.addToDom('vous devez vous connecter',divEL);
    }

}