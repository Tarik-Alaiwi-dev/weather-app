const inputElement = document.getElementById("input");

const url = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=8043277f2aa535f922c96a6256c67668`;
console.log(url);

async function checkWeather() {
    const response = await fetch(url);
    const city = await response.json();
    console.log(city);
  }

