let newsAPI = axios.create({
    baseURL: 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=564c39eca0de46f8b0c49b367b9f6ad3',
    timeout: 3000
})
let newsArr = []
export default class NewsService {
    constructor() { }
    getNews(callback) {
        newsAPI.get('')
            .then(res => {
                res.data.articles.forEach(n => {
                    if(n.source.id != "the-washington-post") {
                        newsArr.push(n)
                    }
                })
                callback(newsArr)
            })
    }
}