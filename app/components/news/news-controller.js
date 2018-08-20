import NewsService from "./news-service.js";

let newsService = new NewsService

export default class NewsController {
    constructor() { 
        newsService.getNews(drawNews)
    }
}
function drawNews(newsArr) {
    let template = ''
    console.log(newsArr)
    newsArr.forEach(news => {
        template += `
        <a href="${news.url}" target="news-iframe">
            <div class="card news-card">
                <h5>${news.source.name}</h4>
                <h6>${news.title}</h6>
            </div>
        </a>
        `
        document.querySelector(".news-articles").innerHTML = template
    })
}