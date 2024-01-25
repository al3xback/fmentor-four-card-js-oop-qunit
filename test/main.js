import jsdom from 'jsdom';

import {
	Component,
	Card,
	CardItem,
	CardList,
	Header,
	Section,
	Main,
	Footer,
} from '../js/util.js';

const { JSDOM } = jsdom;
const { test } = QUnit;

QUnit.module('DOM', (hooks) => {
	hooks.beforeEach(() => {
		const { document } = new JSDOM(
			`<!DOCTYPE html><html><body></body></html>`
		).window;
		global.document = document;
	});

	test("should be able to create element via 'Component' class method", (assert) => {
		const component = new Component();
		const headingOneEl = component.createElement(
			'h1',
			'title',
			'Lorem ipsum'
		);
		document.body.appendChild(headingOneEl);

		const isHeadingOneElElExist = !!document.querySelector('.title');
		assert.ok(isHeadingOneElElExist);
	});

	test("should be able to return element attribute data via 'Component' class method", (assert) => {
		const component = new Component();
		const widthData = component.createElementAttribute('width', 640);

		const expectedWidthData = {
			name: 'width',
			value: 640,
		};

		assert.deepEqual(widthData, expectedWidthData);
	});

	test("should be able to return card data via 'Card' class", (assert) => {
		const rawCardData = new Card(
			'Supervisor',
			'Monitors activity to identify project roadblocks',
			'./images/icons/supervisor.svg'
		);

		const cardData = { ...rawCardData };

		const expectedCardData = {
			id: 'supervisor',
			title: 'Supervisor',
			description: 'Monitors activity to identify project roadblocks',
			imageUrl: './images/icons/supervisor.svg',
		};

		assert.deepEqual(cardData, expectedCardData);
	});

	test("should be able to create card item element via 'CardItem' class", (assert) => {
		const cardData = new Card(
			'Supervisor',
			'Monitors activity to identify project roadblocks',
			'./images/icons/supervisor.svg'
		);
		const cardItem = new CardItem(cardData);
		const cardItemEl = cardItem.render();
		document.body.appendChild(cardItemEl);

		const isCardItemElExist = !!document.querySelector('.card');
		assert.ok(isCardItemElExist);
	});

	test("should be able to create card list element via 'CardList' class", (assert) => {
		const cardList = new CardList();
		const cardListEl = cardList.render();
		document.body.appendChild(cardListEl);

		const isCardListElExist = !!document.querySelector('.cards');
		assert.ok(isCardListElExist);
	});

	test("should be able to create header element via 'Header' class", (assert) => {
		const header = new Header();
		const headerEl = header.render();
		document.body.appendChild(headerEl);

		const isHeaderElExist = !!document.querySelector('header');
		assert.ok(isHeaderElExist);
	});

	test("should be able to create section element via 'Section' class", (assert) => {
		const section = new Section();
		const sectionEl = section.render();
		document.body.appendChild(sectionEl);

		const isSectionElExist = !!document.querySelector('.section');
		assert.ok(isSectionElExist);
	});

	test("should be able to create main element via 'Main' class", (assert) => {
		const main = new Main();
		const mainEl = main.render();
		document.body.appendChild(mainEl);

		const isMainElExist = !!document.querySelector('main');
		assert.ok(isMainElExist);
	});

	test("should be able to create footer element via 'Footer' class", (assert) => {
		const footer = new Footer();
		const footerEl = footer.render();
		document.body.appendChild(footerEl);

		const isFooterElExist = !!document.querySelector('footer');
		assert.ok(isFooterElExist);
	});
});
