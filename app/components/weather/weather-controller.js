import WeatherService from "./weather-service.js";

let weatherService = new WeatherService

export default class WeatherController {
	constructor() {
		weatherService.getWeather(drawWeather)
		document.querySelector(".weather-city").value = localStorage.getItem("city")
	}
	saveCity(e) {
		weatherService.saveCity(e.target.value.replace(/\s/g, "").toLowerCase())
		window.location.reload()
	}
}
function drawWeather(weather) {
	// if (!weather){
	// let templateException = `
	// <div class="card bg-danger">enter a big city to retrieve weather information</d>
	// `
	// document.querySelector(".weather").innerHTML = templateException

	// }

	console.log(weather)
	let template = `
	<div class="card bg-secondary">
		<div class="card-body">
			<h1 class="card-title weather-title">${weather.temp}</h1>
			<div class="weather-row">
				<div class="w-low">${weather.temp_min}</div>
				<div class="w-high">${weather.temp_max}</div>
			</div>
			<div class="humidity">${weather.humidity}</div>
		</div>
	</div>
	`
	document.querySelector(".weather").innerHTML = template
}
