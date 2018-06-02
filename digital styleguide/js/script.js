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