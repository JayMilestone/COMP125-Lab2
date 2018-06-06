/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
(function(){

    function Start() {
        // local variable
        var title = document.title;
        let mySentence = document.getElementById("paragraph");
        mySentence.textContent = "It uses utility classes for typography and spacing to space content out within the larger container.";

        console.log("App Started!");
        console.log("----------------------------");
        console.log("Title: " + title);
    }

    window.onload = Start;
})();