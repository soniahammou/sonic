export const triePersonnages = {

    init:function(){
    triePersonnages.bind();

},


    bind:function(){
        //je selectionne les span filter + je recupere le name input pour recuperer la value plus tard
        const btn = document.querySelectorAll(".filters input[name=type]");

        //je boucle sur les elmts et applique un ecouteurs
        for(const input of btn){
            input.addEventListener("change",triePersonnages.handleClickFilter)
        }

    },

    handleClickFilter:function(event){

        //je recupere la valeur
    const filterValue = event.currentTarget.value;
    // console.log(filterValue)

    //cibler les articles possedant l'attribut data-type correspond a la valeur du filtre 
    const article = document.querySelectorAll(`.main_content-article[data-type='${filterValue}']`);
    
    //faire un toggle poru masquer la class en question  
    article.forEach(element => {
        element.classList.toggle('hidden')

    });
    }
}