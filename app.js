
function fetchWeather(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=758325a6a366025dbac917808800389c`)
    .then((response) => response.json())
    .then((data) => displayWeather(data))
    .catch((error) => {
        alert('the country or city does not exist')
    })
}

function displayWeather(data){
    const {name} = data
        const {icon, description} = data.weather[0]
        const {temp, humidity} = data.main
        const {speed} = data.wind
        document.querySelector('.city').textContent = `Weather in ${name}`
        document.querySelector('.temperature').textContent = `${temp}°C`
        // document.querySelector('img').src = `https://openweathermap.org/img/wn/04d@2x.png`
        document.querySelector('.description').textContent = description
        document.querySelector('.humidity').textContent =`Humidity: ${humidity}`
        document.querySelector('.wind').textContent = `Wind Speed: ${speed} Km/h` 
        document.body.style.backgroundImage = `url(https://source.unsplash.com/1600x900/?${name})`
}

function search(){
    const inputValue = document.querySelector('input').value
    if(inputValue !==""){
        fetchWeather(inputValue)
    }
}

document.querySelector('.search-icon').addEventListener('click', search)
document.querySelector('input').addEventListener('keypress', (e)=>{
    if(e.key === "Enter"){
        search()
    }
})

fetchWeather('germany')