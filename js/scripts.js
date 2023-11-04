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
    const wed = document.querySelector("input#web").value;
    const mob = document.querySelector("input#mob").value;
    const ana = document.querySelector("input#ana").value;
    const dev = document.querySelector("input#dev").value;
    const gen = document.querySelector("input#gen").value;


}