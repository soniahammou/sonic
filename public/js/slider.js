
export const slider = {
    sliderImages: [
        "heros.jpg",
        "sonic-BG.jpg",
        "sonic-BG-3.jpeg",
    ],


    sliderContent: [

        {
            titre: "Sonic et ses amis",
            peL: "Dans l'univers du divertissement, une silhouette bleue émerge tel un éclair, portant avec elle une énergie frénétique et une joie contagieuse. Son nom résonne comme un appel à l'aventure, évoquant des souvenirs intemporels et des sourires complices : Sonic.",

        },
        {
            titre: "Les créateurs de sonic",
            peL: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            titre: "Nous contacter",
            peL: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }


    ],


    /**
* Nouvelle propriété stockant en live la position de l'image courante
*      -> pas besoin de rechercher plus tard laquelle est courante, on le sait déjà
*/
    //correspond a la clef du tableau 
    arrayKeySliderImage: 0,

    //initialise un tableau vide afin de stocker les images du DOM générés
    imageElements: [],
    textSLider: [],


    init: function () {
        //dès le chargement de la page, je souhaite que les images soient chargées
        // slider.generate();
        slider.bind();
    },

    bind: function () {
        slider.generate();
       slider.generateTextContent();

        const btnSlider = document.querySelectorAll(".slider__btn");
        if (btnSlider) {
            //la nodeList me renvoie un tableau avec des clefs
            const previousBtn = btnSlider[0];
            const nextBtn = btnSlider[1];
            if (previousBtn, nextBtn) {

                previousBtn.addEventListener("click", slider.handleClickPreviousBtn);
                nextBtn.addEventListener("click", slider.handleClickNextBtn);
            }
        } else {
            console.log("aucun btn")
        }

    },


    /***********ETAPE 1 : je creer dynamiquement les images du slider  **********/
    /**
    * je créer les balise img et je l'ai intègre dans le DOM de facon dynamique.
    *  j'initialise un tableau contenant le listing de mes images en propriété 
    *  afin de les utiliser je boucle sur le tableau afin de récupérer le nom 
    *   de l'image et l'insérer dans le src / j'attribu la bonne classe
    */


    /**
     * Genere les images du slider
     */
    generate: function () {

        //je créer la balise img et l'ajoute dans la section slider
        const sliderSection = document.querySelector(".slider");

        if (sliderSection) {
            //j'insere les images dans le slider 
            slider.sliderImages.forEach(element => {
                //je créer une balise image pour chage img
                const imgEl = document.createElement("img");
                //je defini le src, la const absolutURL(variable PHP intialement) 
                //a ete defini dans un script afin de l'utiliser en js
                imgEl.src = '/assets/images/' + element;
                //j'ajoute la class slider img et configure le alt et l'ajoute après la section slider
                imgEl.role = 'role="img"'
                imgEl.classList.add("slider__img");
                imgEl.alt = 'sonic-background';
                sliderSection.append(imgEl);

                //dès que je créer une nouvelle image, je l'ajoute au tableau d'imgEL
                slider.imageElements.push(imgEl);

            });

            //je selectionne la premiere image du slider afin de lui appliquer la class current
            const firstSlide = document.querySelector(".slider__img")
            firstSlide.classList.add("slider__img--current")
        }
        else {
            console.log("Aucun élément avec la classe .slider n'a été trouvé sur la page.");
        }
    },




    generateTextContent: function () {

        const sliderSection = document.querySelector(".slider");
        slider.sliderContent.forEach(element => {

            const divEL = document.createElement("div");
            divEL.classList.add("sonic_home__title");


            const h2El = document.createElement("h2");
            const textEL = document.createElement("p");
            const buttonEl = document.createElement("button");
            buttonEl.textContent="En savoir plus";
            buttonEl.classList.add("btn");


            

            h2El.textContent = element.titre;
            textEL.textContent = element.peL;
            divEL.append(h2El);
            divEL.append(textEL);
            divEL.append(buttonEl);

            slider.textSLider.push(divEL);

           // slider.textSLider.push(textEL);

            const figureEL = document.createElement('figure');
            const logo = document.createElement('img');
            logo.src = '/assets/images/Sonic_logo.png';
            logo.alt = 'logo sonic the hedgehog';



            
        divEL.prepend(figureEL);
            figureEL.appendChild(logo);


            //je recherche le dernier element(first of type) de type btn
            const premierBouton = sliderSection.querySelector('.slider__btn:last-of-type');
            // pour inserer la div avant le dernier btn
            sliderSection.insertBefore(divEL, premierBouton);

        });

        const firstSlide =  document.querySelector("div");
        firstSlide.classList.add("sonic_home__title--current");
        
    },

    /***********ETAPE 2 : je defini le comportement des btn du slider  **********/
    /**
    * Pour le bouton precedent je vais m'aider de la nodeList qui renvoie la clef
    * selon le btn clické (CF addeventlister dans le bind)
    * je défini une propriete position que j'initialise par défaut à 0 
    * la position est en realité la clef qui m'aidera a parcourir le tableau d'image
    * si la position est à 0 = l'image 1 du tableau
    * je defini les conditions afin de créer une boucle, si je suis sur l'image 0, 
    * je ne peux pas revenir en arrière car dans mon tableau le -1 n'existe pas
    * je dois donc revenir à la derniere image du tableau sinon, j'initialise 
    * la nouvelle posiiton à -1, pour naviguer dans le tableau -1 ( previous btn)
    */

    /**
     * Fonction me permettant de cibler l'image precedente
     * selon la current image 
     **/
    handleClickPreviousBtn: function () {

        let position;
        // inferrieur ou egal à 0
        if (slider.arrayKeySliderImage <= 0) {
            //je cherche la derniere image
            //le -1 a utilisé car les clefs du tableau commence a 0 et le lenght debute 
            //non pas à 0 mais à un 
            position = slider.sliderImages.length - 1
        } else {
            // je cherche l'image -1
            position = slider.arrayKeySliderImage - 1

        }
        // si on a le bon numéro on va à l'image (suivante ou preced)
        slider.goToSlide(position);

    },

    /***********ETAPE 3 : je gere l'affichage **********/
    /**
    *je dois afficher l'image qui correspond à la bonne clef en attribuant la bonne
    classe sur l'image courante
    */

    /**
        * Fonction me permettant de cibler l'image precedente
        * selon la current image 
        **/
    handleClickNextBtn: function () {

        let position;
        //mon bouton suivant, si je suis à la derniere position je dois revenir à la clef 0 de mon tableau
        if (slider.arrayKeySliderImage >= slider.sliderImages.length - 1) {
            //je cherche la premiere image
            position = 0;
        } else {
            // je cherche l'image +1
            position = slider.arrayKeySliderImage + 1

        }
        // si on a le bon numéro on va à l'image (suivante ou preced)
        slider.goToSlide(position);

    },

    /**
     * Gere l'affichage du slide
     * @param {*} position 
     */
    goToSlide: function (position) {

    
        for (const img of slider.imageElements) {
            img.classList.remove("slider__img--current");

        }
        for (const text of slider.textSLider) {
            text.classList.remove("sonic_home__title--current");

        }
        //je cherche la position dans laquelle je me trouve; la position a ete
        //defini dans el handleClickPreviousBtn
        slider.imageElements[position].classList.add("slider__img--current")
        slider.textSLider[position].classList.add("sonic_home__title--current")
console.log(slider.textSLider);

        //je defini la nouvelle position
        slider.arrayKeySliderImage = position;

    },





}
