const temperature = document.getElementById("temperature");
const temperatureFeel = document.getElementById("weather");
const imgDiv = document.getElementById("img");
const submitButton = document.getElementById("submit-input");
const cityInputText = document.getElementById("city-input");
const weatherImg = document.getElementById("weatherImg")
const locationHour = document.getElementById("locationHour")

// Input
submitButton.addEventListener("click",function(){
    city = cityInputText.value;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8542a14a77bcc9d04a6905a0cb7c1756&mode=json&units=metric&lang=pt_br`;
    cityInputText.value = "";
    
    // Request data from openweather URL
    fetch(url)
    .then(function(data){
        // Returns a Object of the JSON url of openweathermap API
        return data.json();
    })
    .then(function(data){
        // Show the temperature degrees
        temperature.innerText = parseInt(data.main.temp) + '°';
        return data;
    })
    .then(function(data){
        // Show the temperature description
        let temperatureDescription = data.weather[0].description;
        let temperatureDescriptionUpperCase = temperatureDescription.replace(temperatureDescription.charAt(0),temperatureDescription.charAt(0).toUpperCase());
        temperatureFeel.innerText = temperatureDescriptionUpperCase;
        return data;
    })
    .then(function(data){
        // Show the Icon 
        let iconId = data.weather[0].icon;
        let icon = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
        if(document.getElementById("weatherImg"))
        {
            document.getElementById("weatherImg").remove();
        }
        let newText = document.createElement("img");
        newText.setAttribute("src",icon);
        newText.setAttribute("id","weatherImg")
        imgDiv.insertBefore(newText,temperatureFeel);
        return data;
    })
    .then(function(data) {
        // Name of City and Contry
        let cityName = data.name;
        let countryName = data.sys.country;
        
        // Get the Current Hour
        let dateTime = new Date();
        let currentHour = dateTime.getHours();
        let currentMinutes = dateTime.getMinutes();

        locationHour.innerText = `${cityName},${countryName} às ${currentHour}h:${currentMinutes}min`;
    })
    .catch(function(){
        window.alert("Erro, recarregue a página.");
    })
})