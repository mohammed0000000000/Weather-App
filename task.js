// api key 834736d49eea16a223ea1617c3f17bc8
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://openweathermap.org/current
// https://api.openweathermap.org/data/2.5/weather?q=egypt&appid=834736d49eea16a223ea1617c3f17bc8&units=metric

const apiKey = "834736d49eea16a223ea1617c3f17bc8";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=egypt";

let btn = document.querySelector('button');
let input = document.querySelector('[type="text"]');
btn.onclick = function () {
    let val = input.value;
    // console.log(input.value)
    val.toLocaleLowerCase();
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${val}`;
    checkWeather();
}
async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector('.error').style.display = "block";
        document.querySelector('.error').style.marginBottom = "15px";
        document.querySelector('.weather').style.display = "none";
        return;
    }
    document.querySelector('.error').style.display = "none";
    document.querySelector('.weather').style.display = "flex";

    var data = await response.json();

    // console.log(data)

    let cityName = document.querySelector(".card .weather .city");
    let temprature = document.querySelector(".card .weather .temprature");
    let humidity = document.querySelector(".weather .detailes .col .humidity");
    let wind = document.querySelector(".weather .detailes .col .wind");

    cityName.innerHTML = data.name;
    temprature.innerHTML = Math.round(data.main.temp) + "°c";
    humidity.innerHTML = data.main.humidity + "%";
    wind.textContent = data.wind.speed + "km/h";

    let weatherImg = document.querySelector(".image");
    weatherImg.setAttribute("src", `/images/${(data.weather[0].main).toLowerCase()}.png`);
}





