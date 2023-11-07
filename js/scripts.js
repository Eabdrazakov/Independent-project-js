//Business Logic
function hideResults() {

    document.getElementById("java").setAttribute("class", "hidden");
    document.getElementById("ios").setAttribute("class", "hidden");
    document.getElementById("python").setAttribute("class", "hidden");
    document.getElementById("c#").setAttribute("class", "hidden");
    document.getElementById("ruby").setAttribute("class", "hidden");
}

//User interface Logic
function processFormValues() {
    hideResults();
    const program = document.querySelector('input[name="pro"]:checked').value;

    if (program === "websites") {
        document.getElementById("java").removeAttribute("class");
    } else if (program === "apps") {
        document.getElementById("ios").removeAttribute("class");
    } else if (program === "data") {
        document.getElementById("python").removeAttribute("class");
    } else if (program === "game") {
        document.getElementById("c#").removeAttribute("class");
    } else if (program === "auto") {
        document.getElementById("ruby").removeAttribute("class");
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