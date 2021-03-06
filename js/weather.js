const API_KEY = "1e0fe7550b3362e76372eb938b86a62b";

function geoSuccess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&appid="+API_KEY+"&units=metric";
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main + "/" + data.main.temp + "°C";
    })
}

function geoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(geoSuccess,geoError);