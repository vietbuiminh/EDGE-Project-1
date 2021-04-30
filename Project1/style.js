var menu = document.querySelector(".menu");
var ham = document.querySelector(".ham");

var menuIcon = document.querySelector(".menuIcon");

ham.addEventListener("click", toggleMenu);
menu.classList.contains("showMenu");
// toggle menu in and out when clicking on the hamburger
function toggleMenu() {
   if (menu.classList.contains("showMenu")) {
     menu.classList.remove("showMenu");
     menuIcon.style.display = "block";
   } else {
     menu.classList.add("showMenu");
     menuIcon.style.display = "block";
   }
}
var menuLinks = document.querySelectorAll(".menuLink");
menuLinks.forEach( 
   function(menuLink) { 
     menuLink.addEventListener("click", toggleMenu);
   }
 )