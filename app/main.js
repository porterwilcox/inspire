import WeatherController from "./components/weather/weather-controller.js";
import ImageController from "./components/image/image-controller.js";
import GreetingController from "./components/greeting/greeting-controller.js";
import QuoteController from "./components/quote/quote-controller.js";
import TodoController from "./components/todo/todo-controller.js";
import NewsController from "./components/news/news-controller.js";

// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
class app {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController,
      imageController: new ImageController,
      greetingController: new GreetingController,
      quoteController: new QuoteController,
      todoController: new TodoController,
      // newsController: new NewsController
    }
  }
}

window.app = new app()  