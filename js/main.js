import { Header, Main, Footer } from './util.js';

/* initApp */
class App {
	static init() {
		const body = document.body;

		const header = new Header();
		const headerEl = header.render();

		const main = new Main();
		const mainEl = main.render();

		const footer = new Footer();
		const footerEl = footer.render();

		body.appendChild(headerEl);
		body.appendChild(mainEl);
		body.appendChild(footerEl);
	}
}

App.init();
