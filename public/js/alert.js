export const alert = {


    //propriete du bouton de fermeture d'alerte
     divEL : null,
     closeBtn : null,


    init: function () {
        alert.bind();
    },

    bind: function () {
     //ecouteur pour le bouton de fermeture de l'alert
        alert.createBtn();
        alert.closeBtn.addEventListener("click", alert.alertButon);
    },

    /**
     * Creation du bouton de fermeture de l'alerte
     */
    createBtn :function(parentElement){   
        alert.divEL = document.querySelector(parentElement)
        //creation du bouton
        alert.closeBtn = document.createElement("button");
        alert.closeBtn.classList.add('alert-close');
        alert.closeBtn.ariaLabel = "fermer";
        alert.closeBtn.innerHTML = "&Cross;";
    },

/**
 * Creation du message d'alerte
 */
    addToDom: function (textContent,parentElement) {

        //creation de la balise aside afin de créer le contenu de la notification d'erreur
        const alertContainer = document.createElement("aside"); 
        alertContainer.classList.add("alert")

        //creation du paragraphe et de son contenu 
        const pEL = document.createElement("p");
        pEL.textContent = textContent;

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
        alertContainer.appendChild(alert.closeBtn); 

        //le aside sera situé après la div
        parentElement.appendChild(alertContainer); 
    },

    /**
     * Fermeture de l'aside alert
     */
    alertButon:function(){
        const divAlert = document.querySelector(".alert")
        divAlert.remove()

    },


}