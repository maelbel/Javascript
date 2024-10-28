let content = document.getElementById('content');

let search = document.getElementById('search');
let newSearch = document.getElementById('newSearch');

search.addEventListener('submit', async (e) => {
    e.preventDefault();

    const ville = newSearch.value.split(",")[0];
    const langue = "fr";
    const codePaysTest = newSearch.value.split(",")[1];
    const unite = "metric";
    const apiKey = `1a43a926e6182575ac979f1d71040a4a`;

    baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ville},${codePaysTest}&lang=${langue}&units=${unite}&appid=${apiKey}`; 
    
    let weather = await fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => {return data;})
    .catch();

    if(weather){
        content.innerHTML = `
        <div>
            <h2>${weather.name}</h2>
            <div>Pays: ${weather.sys.country}</div>
            <div>Température: ${weather.main.temp}</div>
            <div>Ressenti: ${weather.main.feels_like}</div>
            <div>Température minimal: ${weather.main.temp_min}</div>
            <div>Température maximal: ${weather.main.temp_max}</div>
        </div>
        `   
    }
});