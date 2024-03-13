function WeatherData(city_name, temperature, sunrise, sunset, temperatureIndex) {
  this.cityName = city_name;
  this.temperature = temperature;
  this.sunrise = sunrise;
  this.sunset = sunset;
  this.temperatureIndex = temperatureIndex;
}

WeatherData.prototype.getWeather = async function() {
  let url= "https://api.weatherbit.io/v2.0/current?city=Seattle,WA&key=0d7ac0b136214e258d77b993aa6e2a80&units=I";
  let response= await fetch(url);
  let JSON= await response.json();
  let weather=JSON.data[0];
  console.log(weather);
  
  this.cityName = weather.city_name;
  this.temperature = weather.temp;
  this.sunrise = weather.sunrise;
  this.sunset = weather.sunset;
  this.temperatureIndex = weather.weather.description;

  this.displayWeatherDetails();
  this.checkWeather(); // Now calling checkWeather to suggest clothing
  this.showImage();
};

WeatherData.prototype.displayWeatherDetails = function() {
  let weatherOutputElement = document.getElementById('weather-output');
  weatherOutputElement.textContent = 'City:' + this.cityName + ', Temperature:' + this.temperature + '°, Sunrise: ' + this.sunrise + ', Sunset: ' + this.sunset;
};

WeatherData.prototype.checkWeather = function() {
  let wardrobeSuggestionsDiv = document.getElementById('wardrobe-output');

  let wardrobeSuggestions = '';
  if (this.temperature < 65) {
    wardrobeSuggestions = 'It\'s cool! Consider bringing extra layers.';
  } else {
    wardrobeSuggestions = 'It\'s warm! Remember to bring any sun protection like sunglasses and sunscreen.';
  }

  wardrobeSuggestionsDiv.textContent = wardrobeSuggestions;
  
};

WeatherData.prototype.showImage = function() {
  // Adjust the method to display images based on the temperature
  let imageContainer = document.getElementById('weather-img');
  


  let temperatureImage = document.createElement('img');
  
  // Define the URL for the background image based on temperature
  let backgroundImageURL;
  if (this.temperature < 65) {
    backgroundImageURL = 'https://wallpapers.com/images/hd/cloudy-seattle-4k-rd9wjx3pse7qw05i.jpg';
  } else {
    backgroundImageURL = 'https://www.katebackdrop.com/cdn/shop/articles/Photo_by_Thom_Milkovic_on_Unsplash.jpg?v=1674031429';
  }
  
  // Set the background image using CSS
  imageContainer.style.backgroundImage = "url('" + backgroundImageURL + "')";
  console.log(backgroundImageURL);
};

let weather = new WeatherData();
weather.getWeather();



