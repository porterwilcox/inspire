import Weather from "../../models/Weather.js";

let city = localStorage.getItem("city")

const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = `http://api.openweathermap.org/data/2.5/weather?q=${city}&&APPID=bd82255fd0a21fa1238699b9eda2ee35`
const apiUrl = url + encodeURIComponent(url2);

const weatherApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

export default class WeatherService {
	constructor() {

	}
	saveCity(city) {
		localStorage.setItem("city", city)
	}
	getWeather(callback) {
		weatherApi.get('')
			.then(res => {
				let fWeather = new Weather(res.data.main)
				let cWeather = new Weather(res.data.main)
				let kWeather = new Weather(res.data.main)
				callback(getFahren(fWeather), getCelsius(cWeather))
			})

	}
}
function getFahren(weather) {
	let temp = Math.round((9/5) * (weather.temp - 273) +32)
	let minTemp = Math.round((9/5) * (weather.minTemp - 273) +32)
	let maxTemp = Math.round((9/5) * (weather.maxTemp - 273) +32)
	weather.temp = temp
	weather.minTemp = minTemp
	weather.maxTemp = maxTemp
	return weather
}
function getCelsius(weather) {
	let temp = Math.round(weather.temp - 273.15)
	let minTemp = Math.round(weather.minTemp - 273.15)
	let maxTemp = Math.round(weather.maxTemp - 273.15)
	weather.temp = temp
	weather.minTemp = minTemp
	weather.maxTemp = maxTemp
	return weather
}
