const searchBtn=document.querySelector('.search-btn');
const cityInput=document.querySelector('.city-input');
const temperature=document.querySelector('.temperature h1');
const cityName=document.querySelector('.city-name h2');
const description=document.querySelector('.description p');
const API_KEY = "API_KEY";

async function getweather(city) {
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response=await fetch(url);
    const data=await response.json();
    if(!response.ok){
        alert("enter a valid city name!!");
        cityInput.value="";
        return;
    }
    const temperature=document.querySelector('.temperature span');
    
    const cityName=document.querySelector('.city-name h1');
    const wind=document.querySelector('.wind span');
    const humidity=document.querySelector('.humidity span');
    const weathercondition=document.querySelector('.description p');
    const scene=document.querySelector('.weather-image');
    
    
    temperature.innerHTML=`${Math.round(data.main.temp)}&deg;C`;
    humidity.innerHTML=`${data.main.humidity}%`;
    cityName.innerHTML=`${data.name}`;
    wind.innerHTML=`${data.wind.speed}kmph`;
    weathercondition.innerHTML=`${data.weather[0].description}`;
    
    if(data.weather[0].main ==='Clouds'){
        scene.innerHTML = '<img src="images/clouds.png" alt="clouds">';
    }
    else if(data.weather[0].main ==='Clear'){
        scene.innerHTML = '<img src="images/clear.png" alt="clear">';
    }
    else if(data.weather[0].main ==='Drizzle'){
        scene.innerHTML = '<img src="images/drizzle.png" alt="drizzle">';
    }
    else if(data.weather[0].main ==='Humidity'){
        scene.innerHTML = '<img src="images/humidity.png" alt="humidity">';
    }
    else if(data.weather[0].main ==='Mist'){
        scene.innerHTML = '<img src="images/mist.png" alt="mist">';
    }
     else if(data.weather[0].main ==='Rain'){
        scene.innerHTML = '<img src="images/rain.png" alt="rain">';
    }
     else if(data.weather[0].main ==='Snow'){
        scene.innerHTML = '<img src="images/snow.png" alt="snow">';
    }
    



    


}

searchBtn.addEventListener('click',(e)=>{
    const city=cityInput.value.trim();
    if(city===""){
        alert('please enter a city name');
        return;
    }
    getweather(city);
    
})