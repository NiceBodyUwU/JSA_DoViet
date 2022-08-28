var smartPhones = [
	{ name: 'Iphone', price: 649 },
	{ name: 'Galaxy S6', price: 576 },
	{ name: 'Galaxy Note 5', price: 489 },
];

function getPrice(products) {
	let arrPrice = [];
	for (let product of products) {
		arrPrice.push(product.price);
	}
	return arrPrice;
}

console.log(getPrice(smartPhones));