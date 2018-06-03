/* SEARCHBAR */

var searchbar = document.getElementById("searchbar");
                    
searchbar.style.transition = "all 0.2s";

function searchbarDisplay() {
    if (searchbar.style.display === "block") {
        searchbar.style.display = "none";
    } else {
        searchbar.style.display = "block";
    }
    searchbar.focus();
    searchbar.select();
}

function hidesearchbar() {
    searchbar.style.display = "none";
}

function searchbarnoopacity() {
    searchbar.style.opacity = "1";
}

function searchbaropacity() {
    searchbar.style.opacity = "0.5";
}

/* FAV */

var fav = document.getElementById("card_fav");

function favSelect() {
    if (this.style.fill === "#df0000") {
        this.style.fill = "#df00006c";
    } else {
        this.style.fill = "#df0000";
    }
}