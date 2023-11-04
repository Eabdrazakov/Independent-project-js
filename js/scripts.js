//Business Logic
function hideResults() {
    document.getElementById("error").setAttribute("class", "hidden");
    document.getElementById("java").setAttribute("class", "hidden");
    document.getElementById("ios").setAttribute("class", "hidden");
    document.getElementById("python").setAttribute("class", "hidden");
    document.getElementById("c#").setAttribute("class", "hidden");
    document.getElementById("ruby").setAttribute("class", "hidden");
}

//User interface Logic
function processFormValues() {
    hideResults();
    const web = document.querySelector("input#web").checked;
    const mob = document.querySelector("input#mob").checked;
    const ana = document.querySelector("input#ana").checked;
    const dev = document.querySelector("input#dev").checked;
    const gen = document.querySelector("input#gen").checked;

    if (web) {
        document.getElementById("java").removeAttribute("class");
    } else if (mob) {
        document.getElementById("ios").removeAttribute("class");
    } else if (ana) {
        document.getElementById("python").removeAttribute("class");
    } else if (dev) {
        document.getElementById("c#").removeAttribute("class");
    } else if (gen) {
        document.getElementById("ruby").removeAttribute("class");
    } else {
        document.getElementById("error").removeAttribute("class", "hidden");
    }
}

addEventListener("load", function () {


    function formSubmit(event) {
        hideResults();
        processFormValues();
        event.preventDefault();
    }

    let form = document.getElementById("main");

    form.addEventListener("submit", formSubmit);
});