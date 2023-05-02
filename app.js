// Init storage
const storage = new Storage()
const weatherLocation = storage.getLocationData()

// Init weather object
const weather = new Weather(weatherLocation.city)

// Init UI
const ui = new UI()

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

document
  .getElementById('w-change-btn')
  .addEventListener('click', hangleChangeLocation)

function hangleChangeLocation() {
  const city = document.getElementById('city').value

  storage.setLocationData(city)

  weather.changeLocation(city)

  getWeather()

  $('#locModal').modal('hide')
}

function getWeather() {
  weather
    .getWeather()
    .then((results) => ui.paint(results))
    .catch((err) => console.log(err))
}
