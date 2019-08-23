import QuoteService from "./quote-service.js";

let quoteService = new QuoteService


export default class QuoteController {
	constructor() {
		quoteService.getQuote(drawQuote)
	}
}

function drawQuote(quote) {
	let template = `
	<div class="accordion quote-accordion">
	<div class="card bg-secondary">
		<div class="card-header quote-header">
			<h6 class="mb-0">
				<button class="btn btn-secondary" type="button" data-toggle="collapse" data-target=".collapse-quote" >
					${quote.author} once said
				</button>
			</h6>
		</div>
		<div class="collapse-quote collapse" data-parent=".quote-accordion">
			<div class="card-body quote-body">
				<div class="quote-text">"${quote.body}"</div>
			</div>
		</div>
	</div>
	</div>
	`
	document.querySelector(".quote").innerHTML = template
}
