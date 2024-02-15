// Select the form element by its ID
let searchForm = document.getElementById('searchForm');

// Add an event listener to handle the form's submit event
searchForm.addEventListener('submit', function(event) {
    // Prevent the form from submitting, which prevents page reload
    event.preventDefault();

    // Check if the input has some text in it
    let searchInput = document.getElementById('searchInput').value;
    if (searchInput.trim() !== '') {
        // Inform the user that the search functionality is currently unavailable
        alert('Our search functionality is currently unavailable. Please try again later.');
    }

    // If you need to clear the search input after alerting, uncomment the following line:
    document.getElementById('searchInput').value = '';
});