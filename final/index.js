function openNav() {
  document.getElementById("mySidenav").style.width = "250px";}
 
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");}
    
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
  if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
       }
      }
    }
  }
  
function Function1() {
  document.getElementById("dog").innerHTML = "Dog leash (100*";}
function Function2() {
  document.getElementById("trash").innerHTML = "Trash can (200*";}
function Function3() {
  document.getElementById("toy").innerHTML = "Toy (300*";}
function Function4() {
  document.getElementById("birdcage").innerHTML = "Birdcage (400*";}
function Function5() {
  document.getElementById("patting").innerHTML = "Patting (500*";}
function Function6() {
  document.getElementById("mug").innerHTML = "Mug (600*";}