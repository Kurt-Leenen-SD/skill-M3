fetch('./js/cool.json')
    .then(response => response.json())
    .then(data => {
        const seasonImage = document.getElementById("plaatje");


        function updateSeasonDisplay(x) {
            const seasonData = data.files[x]; 
            seasonImage.src = seasonData.path;
        }
        updateSeasonDisplay(1);
    })