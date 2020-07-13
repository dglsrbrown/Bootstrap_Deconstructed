console.log("Hello")
let path = window.location.pathname;
let page = path.split('/').pop();
console.log("Path = ", path);
console.log("Page = ", page);

let tabDisplayName = document.querySelector("#current");
let activePage = "Home";

console.log(tabDisplayName.innerHTML);



// tabDisplayName.onload = currentPage();