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
function drawWeather(fahren, celsius, kelvin) {
	let template = `
	<div class="accordion weather-accordion">
	<div class="card bg-secondary">
		<div class="card-header header-one">
			<h6 class="mb-0">
				<button class="btn btn-secondary" type="button" data-toggle="collapse" data-target=".collapse-one">
					fahrenheit
				</button>
			</h6>
		</div>
		<div class="collapse-one collapse show" data-parent=".weather-accordion">
			<div class="card-body">
				<h1 class="card-title weather-title">${fahren.temp}°</h1>
				<div class="weather-row mb-2">
					<div class="w-item w-low">${fahren.minTemp}°</div>
					<div class="w-item w-high">${fahren.maxTemp}°</div>
				</div>
				<div class="humidity">humidity: ${fahren.humidity}</div>
			</div>
		</div>
		<div class="card-header header-two">
			<h6 class="mb-0">
				<button class="btn btn-secondary" type="button" data-toggle="collapse" data-target=".collapse-two">
					celsius
				</button>
			</h6>
		</div>
		<div class="collapse-two collapse" data-parent=".weather-accordion">
			<div class="card-body">
				<h1 class="card-title weather-title">${celsius.temp}°</h1>
				<div class="weather-row mb-2">
					<div class="w-item w-low">${celsius.minTemp}°</div>
					<div class="w-item w-high">${celsius.maxTemp}°</div>
				</div>
				<div class="humidity">humidity: ${celsius.humidity}</div>
			</div>
		</div>
	</div>
</div>
	`
	document.querySelector(".weather").innerHTML = template
}

//thanks transformicons.com
!function (r, n) { "function" == typeof define && define.amd ? define(n) : "object" == typeof exports ? module.exports = n() : r.transformicons = n() }(this || window, function () { "use strict"; var r = {}, n = { transform: ["click"], revert: ["click"] }, t = function (r) { return "string" == typeof r ? Array.prototype.slice.call(document.querySelectorAll(r)) : void 0 === r || r instanceof Array ? r : [r] }, o = function (r) { return "string" == typeof r ? r.toLowerCase().split(" ") : r }, e = function (r, e, f) { var i = (f ? "remove" : "add") + "EventListener", s = t(r), a = s.length, u = {}; for (var l in n) u[l] = e && e[l] ? o(e[l]) : n[l]; for (; a--;)for (var d in u) for (var m = u[d].length; m--;)s[a][i](u[d][m], c) }, c = function (n) { r.toggle(n.currentTarget) }; return r.add = function (n, t) { return e(n, t), r }, r.remove = function (n, t) { return e(n, t, !0), r }, r.transform = function (n) { return t(n).forEach(function (r) { r.classList.add("tcon-transform") }), r }, r.revert = function (n) { return t(n).forEach(function (r) { r.classList.remove("tcon-transform") }), r }, r.toggle = function (n) { return t(n).forEach(function (n) { r[n.classList.contains("tcon-transform") ? "revert" : "transform"](n) }), r }, r }); 
transformicons.add(".tcon")

//bye kelvin
/* <div class="card-header header-three">
<h6 class="mb-0">
	<button class="btn btn-secondary" type="button" data-toggle="collapse" data-target=".collapse-three">
		kelvin
	</button>
</h6>
</div>
<div class="collapse-three collapse" data-parent=".weather-accordion">
<div class="card-body">
	<h1 class="card-title weather-title">${kelvin.temp}°</h1>
	<div class="weather-row mb-2">
		<div class="w-item w-low">${kelvin.minTemp}°</div>
		<div class="w-item w-high">${kelvin.maxTemp}°</div>
	</div>
	<div class="humidity">humidity: ${kelvin.humidity}</div>
</div>
</div> */