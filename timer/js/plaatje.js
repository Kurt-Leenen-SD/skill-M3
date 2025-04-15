fetch('./js/cool.json')
    .then(response => response.json())
    .then(data => {
        const Image = document.getElementById("plaatje");


        function Display(x) {
            const seasonData = data.files[x]; 
            Image.src = seasonData.path;
        }
        Display(1);
    })