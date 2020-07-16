/* Dynamic Tab */
let path = window.location.pathname;
let page = path.split('/').pop();

let tabDisplayName = document.querySelector("#current");
function checkTab() {

    switch (page) {
        case "index.html":
            tabDisplayName.innerHTML = "Home";
            break;
        case "grid.html":
            tabDisplayName.innerHTML = "Grid";
            break;
        case "dynamic.html":
            tabDisplayName.innerHTML = "Dynamic Layouts";
            break;
        case "code.html":
            tabDisplayName.innerHTML = "Code";
            break;

    }
}


// When the user clicks on popup, open the popup
function popUp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
