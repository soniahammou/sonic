export const cardDesign = {
    badResponse: [],

    init: function () {

        //Ecouteur d'evenement permetant de retirer l'hover sur la description
        cardDesign.addEventListenerDesciption();

        /*** GESTION HOVER SECTION DESCRIPTION ****************/
        const quizzForm = document.querySelectorAll(".main_content-form");

        for (const form of quizzForm) {
            form.addEventListener("submit", cardDesign.handleQuizz)

        }
    },


    // // /*** GESTION HOVER SECTION DESCRIPTION ****************
    // //  * Ecouteur d'evenement permetant de retirer l'hover sur la 
    // //  * section de description.
    // //  * *********************************************************/
    addEventListenerDesciption: function () {
        // Lorsqu'on clic sur l'article, gestion d'hover article
        const descriptionContent = document.querySelectorAll(".hover-card");

        for (const currentDescription of descriptionContent) {
            currentDescription.addEventListener("click", cardDesign.handleClickHover)
        }
    },

    /*** ECOUTEUR EVENT : ARTICLES ****************
    * ecouteur permettant de faire un toggle sur la class content 
    * au clic de l'article 
    */
    addEventListenersArticles: function () {
        const articles = document.querySelectorAll(".main_content-article");
        for (const article of articles) {
                article.addEventListener("submit", cardDesign.handleRevealContentArticle);
                // article.addEventListener("click", cardDesign.handleRevealContentArticle);
            };
        },  


    handleQuizz: function (event) {

        //j'enleve le comportement par defaux du submit
        event.preventDefault()

        //je selecionne le currenttarget formulaire 
        const form = event.currentTarget;
        
        //je recupere le formulaire
        const reponseUtilisateur = form.querySelector('.quizz_personnage').value;

        let isCorrect = false;
        const personnage = document.querySelectorAll(".main_content-article");

        // Démarre une boucle qui parcourt chaque élément dans la collection personnage
        //afin de récuperer tout les noms des personnages : iscorrect = true
        for (let name of personnage) {
            if (reponseUtilisateur.toLowerCase().trim().includes(name.dataset.name.toLowerCase())) {
                isCorrect = true;
            }
        }

            if (isCorrect) {
                form.reset();
                form.classList.add("hidden")
//je cible la section hidden
const content = event.currentTarget.querySelector(".content");
content.classList.toggle('hidden');

//j'enleve les images
const contentCharachter = event.currentTarget.querySelector(".main_content-charachter");
contentCharachter.classList.toggle('hidden');    
    
            } else {
                cardDesign.badResponse.push(reponseUtilisateur)
    
                if (cardDesign.badResponse.length === 2) {
                    TODO://add message todom
                    console.log("attention derniere chance")
    
                }
                 if (cardDesign.badResponse.length === 3) {
                    form.reset();
                    form.classList.add("hidden")
//je cible la section hidden
const content = event.currentTarget.querySelector(".content");
content.classList.toggle('hidden');

//j'enleve les images
const contentCharachter = event.currentTarget.querySelector(".main_content-charachter");
contentCharachter.classList.toggle('hidden');                }
            }
    
                    // article.addEventListener("click", cardDesign.handleRevealContentArticle);
    


        //si c'est correct dès le premier essai : succes on affiche la carte 
       
        console.log(isCorrect)
        console.log(cardDesign.badResponse)


    },



    /********************* LES HANDLERS ************************/

    /**
     * Methode permettant de reveler le de la section content dans article 
     * contenant la description des perosnnages 
     */
    handleRevealContentArticle: function (event) {

        //je cible la section hidden
        const content = event.currentTarget.querySelector(".content");
        content.classList.toggle('hidden');

        //j'enleve les images
        const contentCharachter = event.currentTarget.querySelector(".main_content-charachter");
        contentCharachter.classList.toggle('hidden');

    },


    /**
     * Handler permettant de retirer le filtre 
     * sur la section de description 
     */
    handleClickHover: function (event) {
        const contentHover = event.currentTarget;
        contentHover.classList.toggle('hover-card');
    },


}

