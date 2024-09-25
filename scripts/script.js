// JavaScript Document
console.log("hi");

/******************************/
/* menu openen de MENU button */
/******************************/

/* JOUW CODE HIER - stap 4 */

// stap 1: zoek de menu-button op en sla die op in een variabele
const menuOpenButton = document.querySelector("header > button");
const deNav = document.querySelector("header nav");

menuOpenButton.onclick = openMenu;

function openMenu() {
  deNav.classList.add("toonMenu");
}

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit


// stap 3: voeg in de functie een class toe aan de nav





/************************************/
/* menu sluiten met de sluit button */
/************************************/

/* JOUW CODE HIER - stap 5 */

// stap 1 - zoek sluiten button op
// var sluitButton = document.querySelector("nav button");

const menuSluitButton = document.querySelector ("nav button");

// stap 2 - laat die button luisteren naar kliks
// sluitButton.onclick = sluitMenu;

menuSluitButton.onclick = sluitMenu;

// stap 3 - in de functie verwijder de class van de nav
// function sluitMenu() {
//   var deNav = document.querySelector("nav");
//   deNav.classList.remove("toonMenu");
// }

function sluitMenu() {
  deNav.classList.remove("toonMenu");
}
