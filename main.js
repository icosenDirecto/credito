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
var contentfulClient = contentful.createClient({
  accessToken: 'v1emMJS5EDfIUHa58PmPblecEzONLM2l1i55T7rZBj8',
  space: 'av15q3i7id4b'
})

var PRODUCT_CONTENT_TYPE_ID = '2vzaN9VlWiszjVGk9fBOY2'

var container = document.getElementById('content')

contentfulClient.getEntries({
  content_type: PRODUCT_CONTENT_TYPE_ID
})
.then(function(entries) {
  container.innerHTML = renderHelp(entries.items)
})

function renderHelp (help) {
  var fields = help.fields
  console.log(fields)
  return category.fields.question
}