class Weather {
  constructor(city) {
    this.apiKey = 'd91f519cd43e46b59f0715dbf7e451c7'
    this.city = city
  }
  // Fetch from api

  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=${this.apiKey}`
      //   `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&lang=fa&APPID=${this.apiKey}`
    )

    const responseData = await response.json()
    return responseData
  }

  // Change location
  changeLocation(city) {
    this.city = city
  }
}
