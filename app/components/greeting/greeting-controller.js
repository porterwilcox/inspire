import GreetingService from "./greeting-service.js"

let greetingService = new GreetingService

export default class GreetingController {
    constructor() {
        greetingService.getGreeting(drawGreeting)
    }
    saveName(e) {
        greetingService.saveName(e.target.value)
    }
}

function drawGreeting(greeting) {
    document.querySelector(".hello").innerHTML = greeting
}
if (localStorage.getItem("name")) {
    document.querySelector(".my-name").value = localStorage.getItem("name")
}
