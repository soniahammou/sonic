export const categorieAdd = {


    //propriete du bouton de fermeture d'alerte
     divEL : null,
     closeBtn : null,


    init: function () {
        categorieAdd.bind();
    },

    bind: function () {
        const btn = document.querySelector(".main_select-type .btn");
        btn.addEventListener("click", categorieAdd.handleAlerte);

        //ecouteur pour le bouton de fermeture de l'alert
        categorieAdd.createBtn();
        categorieAdd.closeBtn.addEventListener("click", categorieAdd.alertButon);
    },

    /**
     * Creation du bouton de fermeture de l'alerte
     */
    createBtn :function(){
        
        categorieAdd.divEL = document.querySelector(".filters")
        //creation du bouton
        categorieAdd.closeBtn = document.createElement("button");
        categorieAdd.closeBtn.classList.add('alert-close');
        categorieAdd.closeBtn.ariaLabel = "fermer";
        categorieAdd.closeBtn.innerHTML = "&Cross;";
    },

/**
 * Creation du message d'alerte
 */
    handleAlerte: function (event) {
        event.preventDefault();

        //creation de la balise aside afin de créer le contenu de la notification d'erreur
        const alertContainer = document.createElement("aside"); 
        alertContainer.classList.add("alert")

        //creation du paragraphe et de son contenu 
        const pEL = document.createElement("p");
        pEL.textContent = "vous devez vous connecter";

        //je paramettre la position du paragraphe : enfant de la balise aside
        alertContainer.appendChild(pEL);

        //je selectionne toutes les balsies aside avec la class alert 
        const asideAlertElements = document.querySelectorAll(".alert")

        //je boucle sur les asides et retire les messages qui s'ajouterons a chaque
        //fois que l'utilisateur va clicé sur "ajouter une nouvelle cateforie"
        for (const messageElement of asideAlertElements) {
            messageElement.remove();
        }

        //le bouton de fermeture,sera après le container
        alertContainer.appendChild(categorieAdd.closeBtn); 

        //le aside sera situé après la div
        categorieAdd.divEL.appendChild(alertContainer); 
    },

    /**
     * Fermeture de l'aside alert
     */
    alertButon:function(){
        const divAlert = document.querySelector(".alert")
        divAlert.remove()

    },


}