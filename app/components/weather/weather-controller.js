import WeatherService from "./weather-service.js";

let weatherService = new WeatherService

export default class WeatherController {
	constructor() {
		weatherService.getWeather()
	}
}
