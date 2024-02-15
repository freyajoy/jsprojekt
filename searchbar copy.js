
let searchForm = document.getElementById('searchForm');

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

  //if else
    let searchInput = document.getElementById('searchInput').value.trim();
    if (searchInput === 'hej') {
        alert("Hej Thomas");
    } else if (searchInput == 'Hej') {
        alert('Hej Thomas');
    } else if (searchInput == 'Hest') {
        alert('Vriinsk!');
    } else if (searchInput == 'hest') {
        alert('Vriinsk!');
    } else if (searchInput == 'Goddag') {
        alert('Goddag Thomas');
    } else if (searchInput == 'goddag') {
        alert('Goddag Thomas');
    } else if (searchInput == 'Pony') {
        alert('Ihhiii');
    } else if (searchInput == 'Hoppe') {
        alert('Vriinsk!');
    } else if (searchInput == 'Hingst') {
        alert('Ihhiii');
    } else if (searchInput !== '') {
        alert('Virker ikke');
    }
});

//loop
let colors = ["pink", "orange", "green"];
let currentColorIndex = 0; // Track the current color index globally

document.getElementById('searchForm').addEventListener('click', function() {
    let element = document.getElementById('knap');

    for (let i = 0; i < colors.length; i++) {
        if (i === currentColorIndex) {
            element.style.backgroundColor = colors[i];
            currentColorIndex = (i + 1) % colors.length;
            break; // Exit the loop after changing the color
        }
    }
});

//array
document.addEventListener('DOMContentLoaded', () => {
    let suggestions = ["Hest", "Pony", "Hoppe", "Hingst"];
    
    let searchInput = document.getElementById('searchInput');
    let suggestionsContainer = document.getElementById('options');

    searchInput.addEventListener('input', function() {
        suggestionsContainer.innerHTML = '';
        let inputVal = this.value.trim();

        let filteredSuggestions = suggestions.filter(suggestion =>
            suggestion.toLowerCase().includes(inputVal.toLowerCase())
        );

        if (inputVal && filteredSuggestions.length) {
            suggestionsContainer.style.display = 'block';
            filteredSuggestions.forEach(suggestion => {
                let div = document.createElement('div');
                div.textContent = suggestion;
                div.classList.add('suggestion-item');
                div.onclick = function() {
                    searchInput.value = suggestion;
                    suggestionsContainer.style.display = 'none';
                };
                suggestionsContainer.appendChild(div);
            });
        } else {
            suggestionsContainer.style.display = 'none';
        }
    });

    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
            suggestionsContainer.style.display = 'none';
        }
    });
});