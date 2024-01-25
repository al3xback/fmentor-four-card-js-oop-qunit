class Component {
	createElementAttribute(name, value) {
		return {
			name,
			value,
		};
	}

	createElement(tag, className, text, attributes) {
		const newElement = document.createElement(tag);
		if (className) {
			newElement.className = className;
		}
		newElement.textContent = text || '';
		if (attributes && attributes.length > 0) {
			for (const attr of attributes) {
				newElement.setAttribute(attr.name, attr.value);
			}
		}
		return newElement;
	}
}

class Card {
	id;
	title;
	description;
	imageUrl;

	constructor(title, description, imageUrl) {
		this.id = this.calculateId(title);
		this.title = title;
		this.description = description;
		this.imageUrl = imageUrl;
	}

	calculateId(val) {
		return val.toLowerCase().split(' ').join('-');
	}
}

class Header extends Component {
	render() {
		const headerEl = this.createElement('header');

		const headerTitleEl = this.createElement(
			'h1',
			'sr-only',
			'Four card feature section'
		);

		headerEl.appendChild(headerTitleEl);

		return headerEl;
	}
}

class CardItem extends Component {
	constructor(item) {
		super();
		this.item = item;
	}

	render() {
		const cardItemEl = this.createElement(
			'div',
			`card card--${this.item.id}`
		);

		const cardItemTitleEl = this.createElement(
			'h3',
			'card__title',
			this.item.title
		);

		const cardItemDescriptionEl = this.createElement(
			'p',
			'card__desc',
			this.item.description
		);

		const cardItemImageWrapperEl = this.createElement('div', 'card__image');

		const cardItemImageEl = this.createElement('img', null, null, [
			this.createElementAttribute('src', this.item.imageUrl),
			this.createElementAttribute('alt', ''),
			this.createElementAttribute('width', 64),
			this.createElementAttribute('height', 64),
		]);

		cardItemImageWrapperEl.appendChild(cardItemImageEl);

		cardItemEl.appendChild(cardItemTitleEl);
		cardItemEl.appendChild(cardItemDescriptionEl);
		cardItemEl.appendChild(cardItemImageWrapperEl);

		return cardItemEl;
	}
}

class CardList extends Component {
	cardBlocks = [
		{
			items: [
				new Card(
					'Supervisor',
					'Monitors activity to identify project roadblocks',
					'./images/icons/supervisor.svg'
				),
			],
		},
		{
			items: [
				new Card(
					'Team Builder',
					'Scans our talent network to create the optimal team for your project',
					'./images/icons/team-builder.svg'
				),
				new Card(
					'Karma',
					'Regularly evaluates our talent to ensure quality',
					'./images/icons/karma.svg'
				),
			],
		},
		{
			items: [
				new Card(
					'Calculator',
					'Uses data from past projects to provide better delivery estimates',
					'./images/icons/calculator.svg'
				),
			],
		},
	];

	render() {
		const cardListEl = this.createElement('div', 'cards');

		for (const cardBlock of this.cardBlocks) {
			const cardBlockEl = this.createElement('div', 'cards__block');

			for (const item of cardBlock.items) {
				const cardItem = new CardItem(item);
				const cardItemEl = cardItem.render();

				cardBlockEl.appendChild(cardItemEl);
			}

			cardListEl.appendChild(cardBlockEl);
		}

		return cardListEl;
	}
}

class Section extends Component {
	render() {
		const sectionEl = this.createElement('section', 'section');

		/* section head */
		const sectionHeadEl = this.createElement('div', 'section__head');

		const cardsSummaryTitleEl = this.createElement(
			'h2',
			'cards-summary__title',
			'Reliable, efficient delivery'
		);

		const cardsSummarySubtitleEl = this.createElement(
			'p',
			'cards-summary__subtitle'
		);

		const sectionHeadSubtitleTextEl = this.createElement(
			'strong',
			null,
			'Powered by Technology'
		);

		cardsSummarySubtitleEl.appendChild(sectionHeadSubtitleTextEl);

		const cardsSummaryDescriptionEl = this.createElement(
			'p',
			'cards-summary__desc',
			'Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful'
		);

		sectionHeadEl.appendChild(cardsSummaryTitleEl);
		sectionHeadEl.appendChild(cardsSummarySubtitleEl);
		sectionHeadEl.appendChild(cardsSummaryDescriptionEl);

		/* section body */
		const sectionBodyEl = this.createElement('div', 'section__body');

		const cardList = new CardList();
		const cardListEl = cardList.render();

		sectionBodyEl.appendChild(cardListEl);

		sectionEl.appendChild(sectionHeadEl);
		sectionEl.appendChild(sectionBodyEl);

		return sectionEl;
	}
}

class Main extends Component {
	render() {
		const mainEl = this.createElement('main');

		const mainContainerEl = this.createElement('div', 'container');

		const section = new Section();
		const sectionEl = section.render();

		mainContainerEl.appendChild(sectionEl);

		mainEl.appendChild(mainContainerEl);

		return mainEl;
	}
}

class Footer extends Component {
	render() {
		const footerEl = this.createElement('footer');

		const footerContainerEl = this.createElement('div', 'container');

		const footerTextEl = this.createElement('p', null, 'Challenge by ');

		const footerTextLinkCreatorEl = this.createElement(
			'a',
			'btn btn--link',
			'Frontend Mentor',
			[
				this.createElementAttribute(
					'href',
					'https://www.frontendmentor.io?ref=challenge'
				),
				this.createElementAttribute('rel', 'noopener'),
				this.createElementAttribute('target', '_blank'),
			]
		);

		const footerTextLinkCoderEl = this.createElement(
			'a',
			'btn btn--link',
			'al3xback',
			[
				this.createElementAttribute(
					'href',
					'https://github.com/al3xback'
				),
				this.createElementAttribute('rel', 'noopener'),
				this.createElementAttribute('target', '_blank'),
			]
		);

		footerTextEl.appendChild(footerTextLinkCreatorEl);
		footerTextEl.append('. Coded by ');
		footerTextEl.appendChild(footerTextLinkCoderEl);

		footerContainerEl.appendChild(footerTextEl);

		footerEl.appendChild(footerContainerEl);

		return footerEl;
	}
}

export { Component, Card, CardItem, CardList, Header, Section, Main, Footer };
