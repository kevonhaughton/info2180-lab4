document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchQuery').value.trim();
    const url = query ? `superheroes.php?query=${encodeURIComponent(query)}` : 'superheroes.php';

    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('result').innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
});


