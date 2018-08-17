import QuoteService from "./quote-service.js";

let quoteService = new QuoteService


export default class QuoteController {
	constructor() {
		quoteService.getQuote(drawQuote)
	}
}

function drawQuote(quote){	
	let template = `
	<div>
		<p class="quote-text">${quote.quote}</p>
		<br>
		<p class="quote-author">-${quote.author}</p>
	</div>
	`
	document.querySelector(".quote").innerHTML = template
}
