function WeatherData(temperature, humidity, windSpeed, temperatureIndex) {
  this.temperature = temperature;
  this.humidity = humidity;
  this.windSpeed = windSpeed;
  this.temperatureIndex = temperatureIndex;
}

WeatherData.prototype.getWeather = function() {
  let temperatures = ['Sunny', 'Cloudy', 'Rainy', 'Stormy'];
  let humidities = ['Low', 'Medium', 'High'];
  let windSpeeds = ['Calm', 'Moderate', 'Windy'];


  let temperatureIndex = Math.floor(Math.random() * temperatures.length);
  let humidityIndex = Math.floor(Math.random() * humidities.length);
  let windSpeedIndex = Math.floor(Math.random() * windSpeeds.length);


  this.temperature = temperatures[temperatureIndex];
  this.humidity = humidities[humidityIndex];
  this.windSpeed = windSpeeds[windSpeedIndex];
  this.temperatureIndex = temperatureIndex;
};

WeatherData.prototype.displayWeatherDetails = function() {
  // let weatherOutputElement = document.getElementById('weather-output');
  // weatherOutputElement.textContent = 'Temperature: ' + this.temperature + ', Humidity: ' + this.humidity + ', Wind Speed: ' + this.windSpeed;
 
  document.write ('Temperature: ' + this.temperature + ', Humidity: ' + this.humidity + ', Wind Speed: ' + this.windSpeed)
};


WeatherData.prototype.checkWeather = function() {

  let wardrobeSuggestionsDiv = document.getElementById('wardrobe-output');

  let wardrobeSuggestions = '';
  if (this.temperature === 'Rainy') {
    wardrobeSuggestions = 'It\'s raining! Don\'t forget to bring an umbrella.';
  } else if (this.temperature === 'Sunny') {
    wardrobeSuggestions = 'It\'s sunny! Don\'t forget your sunglasses and sunscreen.';
  } else if (this.temperature === 'Cloudy') {
    wardrobeSuggestions = 'It\'s cloudy! Bring a light jacket just in case.';
  } else {
    wardrobeSuggestions = 'Weather is unpredictable! Bring layers for any condition.';
  }

  // wardrobeSuggestionsDiv.textContent = wardrobeSuggestions;
  document.write (wardrobeSuggestions)
};

WeatherData.prototype.showImage = function() {


  let temperatureImages = {
    0: 'https://kidder.com/wp-content/uploads/post/2020-08-10-seattle-apartment-sales-update-dylan-simon.jpg', // Sunny
    1: 'https://ca-times.brightspotcdn.com/dims4/default/f408cb4/2147483647/strip/true/crop/4429x2492+0+0/resize/1200x675!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F46%2F59%2F41e2103b442ebd463c48371bed67%2Fseattle-skyline-81509.jpg', // Cloudy
    2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MxV7cLXeP0WTAYyGcgbTeIqfyuinyh0a6Q&usqp=CAU', //  Rainy
    3: 'https://cdn.geekwire.com/wp-content/uploads/2017/04/seattle-skyline-storm1.jpg' // Stormy
  };

  // let imageContainer = document.getElementById('image-container');
  // let temperatureImage = document.createElement('img');
  // temperatureImage.src = temperatureImages[this.temperatureIndex];
  // temperatureImage.alt = this.temperature;
  // imageContainer.appendChild(temperatureImage);
  document.write(`<img src="${temperatureImages[this.temperatureIndex]}"/>`)
};


let weather = new WeatherData();

weather.getWeather();


