import WeatherController from "./components/weather/weather-controller.js";
import ImageController from "./components/image/image-controller.js";

// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
class app {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController,
      imageController: new ImageController
    }
  }
}

window.app = new app()  