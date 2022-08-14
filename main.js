/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

// main.js
var contentful = require('contentful');
var client = contentful.createClient({
  space: 'av15q3i7id4b',
  accessToken: 'v1emMJS5EDfIUHa58PmPblecEzONLM2l1i55T7rZBj8',
});