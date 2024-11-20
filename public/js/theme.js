export const theme = {
    bodyEL: null,
    colorEl: [],

    init: function () {
        theme.bind();
    },

    bind: function () {
        theme.handleAddEventListener();
        theme.colorEl = ["theme-red", "theme-blue", "theme-green"];

    },

    /**
     * Method to add event listeners
     */
    handleAddEventListener: function () {

        theme.bodyEL = document.querySelector("body");

        //Theme Dark
        const btnTheme = document.querySelector("#theme-switch");
        btnTheme.addEventListener("click", theme.handleDarkTheme);

        //Theme Color
        const btnColor = document.querySelectorAll(".theme-button");
        btnColor.forEach(element => {
            element.addEventListener("click", theme.handleColorTheme);
        });

    },

    /**
      * Method to alternate between dark theme and light theme.
      */
    handleDarkTheme: function () {
        theme.bodyEL.classList.toggle("theme-dark");
    },


    /**
    * Method to apply a color change to the theme of the site   
    * 
    */
    handleColorTheme: function (event) {
        //I select the target actually affected with its id      
        const classButton = event.currentTarget.id;
        
        // I delete all classes that can be added to the body
        theme.colorEl.forEach(element => {
            theme.bodyEL.classList.remove(element);
        });

        //I add the class concerned by the click
        theme.bodyEL.classList.add(classButton);
    }
}

