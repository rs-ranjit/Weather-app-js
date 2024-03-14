const apiKey = "421e8ff0cc37f74201740fdf491d5aac"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const countryInput = document.getElementById('country');
const btn = document.querySelector('.btn');
const icon  =  document.querySelector('.weather-icon');
const defaultCountry = 'nepal';

async function weatherInfo(country){
    const response = await fetch(apiUrl + `&q=${country}`+`&appid=${apiKey}`);
    let data = await response.json();

    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.country').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = Math.round(data.main.humidity)+' %';
    document.querySelector('.wind-speed').innerHTML = data.wind.speed+' Km/h';
    
    
    switch(data.weather[0].main){
        case 'Clouds':
            icon.src = 'images/clouds.png';
            break;
        case 'Clear':
            icon.src = 'images/clear.png';
            break;
        case 'Drizzle':
                icon.src = 'images/drizzle.png';
                break;
        case 'Mist':
                icon.src = 'images/mist.png';
                break;
        case 'Rain':
            icon.src = 'images/rain.png';
            break;
        case 'Snow':
            icon.src = 'images/snow.png';
            break;
    }
    
} 

weatherInfo(defaultCountry);

btn.addEventListener('click',()=>{
    weatherInfo(countryInput.value);
    countryInput.value = '';
});

countryInput.addEventListener("keydown", function(e) {
    if(e.key === 'Enter' || e.keyCode === 13){
        weatherInfo(countryInput.value);
        countryInput.value = '';
    }
});
