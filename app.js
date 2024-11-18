document.getElementById('searchButton').addEventListener('click', function() {
    fetch('superheroes.php')
        .then(response => response.json())
        .then(data => {
            let superheroesList = "<ul>";
            data.forEach(superhero => {
                superheroesList += `<li>${superhero}</li>`;
            });
            superheroesList += "</ul>";
            alert(superheroesList);
        })
        .catch(error => console.error('Error:', error));
});

