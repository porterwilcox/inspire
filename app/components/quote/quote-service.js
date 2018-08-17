let url = '//bcw-getter.herokuapp.com/?url=';
let url2 = 'http://quotesondesign.com/api/3.0/api-3.0.json';
let apiUrl = url + encodeURIComponent(url2);

const quoteApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

export default class QuoteService {
	constructor() {

	}
	getQuote(callback){
		quoteApi.get()
			.then(res => callback(res.data))
	}
}