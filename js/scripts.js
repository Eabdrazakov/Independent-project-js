//Business Logic
function hideResults() {
    document.getElementById("java").setAttribute("class", hidden);
    document.getElementById("ios").setAttribute("class", hidden);
    document.getElementById("python").setAttribute("class", hidden);
    document.getElementById("c#").setAttribute("class", hidden);
    document.getElementById("ruby").setAttribute("class", hidden);
}


function processFormValues() {
    hideResults();
    const web = document.querySelector("input#web").value;
    const mob = document.querySelector("input#mob").value;
    const ana = document.querySelector("input#ana").value;
    const dev = document.querySelector("input#dev").value;
    const gen = document.querySelector("input#gen").value;

    if (web || mob || ana || dev || gen) {
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
        }
    }
}