import { alert } from "./alert.js";

export const cardDesign = {

    reponseUtilisateur: null,

    init: function () {
        alert.bind();
        this.bind();

    },
    bind: function () {

        // ECOUTEUR : DESCRIPTION CONTENT 
        //lorsqu'on clic sur le bouton submit la description s'affiche 

        //en utilisant une methode de selection d'elements du DOM je recupere un objet javacsipt : une nodelist
        const forms = document.querySelectorAll(".main_content-form");

        for (const form of forms) {
            //form est donc un node (un objet DOM ) auquelle je lui assigne une propriete 
            form.badResponse=[];
            form.addEventListener("submit", cardDesign.handleShowDescription);
        }


        //au clic l'article se revele
        // const articles =  document.querySelectorAll(".main_content-article");
        // for (const article of articles) {
        //     article.addEventListener("click", cardDesign.revealDescription);
        // }
    },

    /**
     * Au clic du btn form, la description s'affiche et masque les images
     */
    handleShowDescription: function (event) {
        //j'enleve le parametre par defaut du submit
        event.preventDefault();


        const form = event.currentTarget;
       
        //Verification des reponses des utilisateur
        let isCorrect = cardDesign.quizzVerification(form);

        //je crer les alert
       
        //je compare la reponse de l'utilisateur avec la bonne reponse
        if (isCorrect) {
            cardDesign.revealDescription(form);
            //je reset le formulaire et je le masque
            form.reset();
            form.classList.add("hidden")

            //TODO possibilité à l'utilisateur de cliqué de nouveau sur la section pour faire apparaitre l'image
            
        }
        else {
            if (form.badResponse)
            form.badResponse.push(cardDesign.reponseUtilisateur)

            if (form.badResponse.length === 1) {
                TODO://add message todom
                alert.addToDom('Mauvaise reponse, essai de nouveau !',form);

                // console.log("Mauvaise reponse, réessai !")
            }

            if (form.badResponse.length === 2) {
                //add message todom
                alert.addToDom('Attention dernier essai !',form);

                           }

            if (form.badResponse.length === 3) {
                alert.addToDom("C'est raté !",form);
                    cardDesign.revealDescription(form);
                    form.reset();
                    form.classList.add("hidden")
                    form.badResponse=[];

                

              
            }
        }




    },

    /**
     * recupère la bonne reponse et la compare avec celle de l'utilisateur
     * @param {string} currentTarget 
     */
    quizzVerification: function (currentTarget) {
        //je recupere la reponse de l'utilisateur
        cardDesign.reponseUtilisateur = currentTarget.querySelector('.quizz_personnage').value;

        //je reference dans une const la bonne reponse 
        // const currentSection = currentTarget.parentElement.querySelector(".content");
        //ou comme ca 
        const input =  currentTarget.querySelector(".quizz_personnage")


        // const rightAnswer = currentSection.querySelector('h1').textContent;
        const rightAnswer = input.dataset.name;

        //je definie ma condition :
        let isCorrect = false;

        if (cardDesign.reponseUtilisateur.toLowerCase().trim().includes(rightAnswer.toLowerCase().trim())) {
            isCorrect = true;
        }

        return isCorrect;
        
    },

    /**
     * affiche la description et masque les images
     */
    revealDescription: function (currentTarget) {
        //affichage de la description 
        const description = currentTarget.parentElement.querySelector(".content");
        description.classList.toggle("hidden")
        //je masque les images
        const imgages = currentTarget.parentElement.querySelector(".main_content-charachter");
        imgages.classList.toggle('hidden');

    }



}