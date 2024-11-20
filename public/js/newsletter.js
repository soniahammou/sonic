export const newsletter = {
     forbiddenDomains : [
        '@yopmail.com',
        '@yopmail.fr',
        '@yopmail.net',
        '@cool.fr.nf',
        '@jetable.fr.nf',
        '@courriel.fr.nf',
        '@moncourrier.fr.nf',
        '@monemail.fr.nf',
        '@monmail.fr.nf',
        '@hide.biz.st',
        '@mymail.infos.st',
      ],
    init: function () {
        newsletter.bind();
    },

    bind: function () {
        //ecouteur d'event pour l'apparition de la newsleter depuis la navbar
        const navEl = document.querySelector("#newsletter-anchor");
        navEl.addEventListener("click", newsletter.handleClickNavEL);

        //ecouteur devenement pour la fermeture de la newsletter
        const closeBtn = document.querySelector(".newsletter__close");
        closeBtn.addEventListener("click",newsletter.handleCloseBtn);

        //ecouteur d'event sur le submit
        const form = document.querySelector(".newsletter form");
        form.addEventListener("submit",newsletter.handleSubmit);

    },





    // 1 - je veux que cet encart n'apparaisse que si on clique sur le lien newsletter en haut de l'écran. 

    handleClickNavEL: function (event) {
        event.preventDefault()
        const encart = document.querySelector(".newsletter");
        encart.classList.toggle("newsletter--on");
    },

    // 2- Et qu'il se ferme si on clique sur la croix

    handleCloseBtn:function(){
        const encart = document.querySelector(".newsletter");
        encart.classList.remove("newsletter--on");
    },

    //3 soumission du fomulaire en verifiant les emails 
    handleSubmit : function(event){
        event.preventDefault();
        
        const inputValue = document.querySelector(".newsletter__field").value;

        const pEl = document.createElement("p");

        //je defini sur false car il sera toujours true etant donné que la boucle foreach parcours est renvoie true si elle trouve pas 
        let isForbidden = false;


        newsletter.forbiddenDomains.forEach(element => {
        
            if(inputValue.includes(element)){
                    console.log(element);
                    isForbidden = true;

        }
        });

        if (isForbidden) {
            pEl.innerText = "L'adresse saisie est incorrecte";
        } else {
            pEl.innerText = "Merci pour votre inscription";
        }
        const formEL = document.querySelector(".newsletter form");

        formEL.append(pEl);

        event.currentTarget.reset();

    }


}


