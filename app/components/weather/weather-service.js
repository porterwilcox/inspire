const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
const apiUrl = url + encodeURIComponent(url2);

const weatherApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

export default class WeatherService {
	constructor(){

	}
	getWeather(callWhenDone) {
		weatherApi().then(function (res) {
			localStorage.setItem('weather', JSON.stringify(res.data.main.temp))
			console.log(res.data);
			console.log(localStorage)
		})
	}
}
