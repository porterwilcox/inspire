const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/'
const apiUrl = url + encodeURIComponent(url2);

const imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

export default class ImageService {
	constructor() {

	}
	getImage(callback) {
		imgApi.get(`search?query=forest`)
			.then(res => {
				callback(res.data.images)
				localStorage.setItem('image', res.data.images[15].url)
			})
	}
}
