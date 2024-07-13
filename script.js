// Get the search form element
const searchForm = document.querySelector('.search-form');

// Add a submit event listener to the search form
searchForm.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the search input field value
  const searchTerm = searchForm.querySelector('input[type="text"]').value;

  // Redirect the browser to the search results page
  window.location.href = `https://www.example.com/search?q=${searchTerm}`;
});
 
              
