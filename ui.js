class UI {
  constructor() {
    this.location = document.getElementById('w-location')
    this.desc = document.getElementById('w-desc')
    this.location = document.getElementById('w-location')
    this.string = document.getElementById('w-string')
    this.details = document.getElementById('w-details')
    this.icon = document.getElementById('w-icon')
    this.humidity = document.getElementById('w-humidity')
    this.feelsLike = document.getElementById('w-feels-like')
    this.wind = document.getElementById('w-wind')
    // this.a='asd'
    // this.a.toLocaleUpperCase
  }

  paint(weather) {
    this.location.textContent = `${weather.name} : ${weather.sys.country}`
    this.desc.textContent = weather.weather[0].description
    this.string.textContent = Math.round(weather.main.temp) + ' °C'
    this.icon.setAttribute(
      'src',
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    )
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`
    this.feelsLike.textContent = `Feels Like: ${Math.round(
      weather.main.feels_like
    )} °C`
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} km/h`
  }
  cToF(celsius) {
    const cToFahr = (celsius * 9) / 5 + 32
    return cToFahr
  }
}
