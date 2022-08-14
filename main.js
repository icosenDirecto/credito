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
const contentful = require("contentful");
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "av15q3i7id4b",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "v1emMJS5EDfIUHa58PmPblecEzONLM2l1i55T7rZBj8"
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
client
  .getEntry("2vzaN9VlWiszjVGk9fBOY2")
  .then(entry => console.log(entry))
  .catch(err => console.log(err));