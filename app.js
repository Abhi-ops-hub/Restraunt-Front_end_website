function showMenu() {
    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
}
function showEat() {
    document.getElementById("eat-section").style.display = "flex";
    document.getElementById("drink-section").style.display = "none";
}

function showDrink() {
    document.getElementById("eat-section").style.display = "none";
    document.getElementById("drink-section").style.display = "flex";
}
