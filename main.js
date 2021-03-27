const temperature = document.getElementById("temperature");
const temperatureFeel = document.getElementById("weather");
const imgDiv = document.getElementsByClassName("img");
const submitButton = document.getElementById("submit-input");
const cityInputText = document.getElementById("city-input");
let city = "";

// Input
submitButton.addEventListener("click",function(){
    city = "";
    city = cityInputText.value;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8542a14a77bcc9d04a6905a0cb7c1756&mode=json&units=metric&lang=pt_br`;
    fetch(url)
    .then(function(data){
        return data.json();
    })
    .then(function(data){
        console.log(data) // Delete this
        temperature.innerText = parseInt(data.main.temp) + '°';
        return data;
    })
    .then(function(data){
        console.log(data); // Delete this
        let temperatureDescription = data.weather[0].description;
        let temperatureDescriptionUpperCase = temperatureDescription.replace(temperatureDescription.charAt(0),temperatureDescription.charAt(0).toUpperCase());
        temperatureFeel.innerText = temperatureDescriptionUpperCase;
    })
    .catch(function(){
        window.alert("Erro, recarregue a página.");
    })
})



