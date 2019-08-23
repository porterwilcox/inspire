const quoteApi = axios.create({
	baseURL: "https://favqs.com/api/qotd",
	timeout: 3000
});

export default class QuoteService {
	constructor() {

	}
	getQuote(callback){
		quoteApi.get()
			.then(res => callback(res.data.quote))
	}
}