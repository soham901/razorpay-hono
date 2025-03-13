export type Item = {
	id: string;
	title: string;
	img: string;
	description: string;
	amount: number;
	currency: string;
};

export const items = [
	{
		id: "item-1",
		title: "Item 1",
		description:
			"Description Some quick example text to build on the card title and make up the bulk of the card.",
		amount: 100,
		currency: "INR",
		img: "https://picsum.photos/400/200?random=1",
	},
	{
		id: "item-2",
		title: "Item 2",
		description:
			"Description Some quick example text to build on the card title and make up the bulk of the card.",
		amount: 200,
		currency: "INR",
		img: "https://picsum.photos/400/200?random=2",
	},
	{
		id: "item-3",
		title: "Item 3",
		description:
			"Description Some quick example text to build on the card title and make up the bulk of the card.",
		amount: 300,
		currency: "INR",
		img: "https://picsum.photos/400/200?random=3",
	},
	{
		id: "item-4",
		title: "Item 4",
		description:
			"Description Some quick example text to build on the card title and make up the bulk of the card.",
		amount: 400,
		currency: "INR",
		img: "https://picsum.photos/400/200?random=4",
	},
	{
		id: "item-5",
		title: "Item 5",
		description:
			"Description Some quick example text to build on the card title and make up the bulk of the card.",
		amount: 500,
		currency: "INR",
		img: "https://picsum.photos/400/200?random=5",
	},
	{
		id: "item-6",
		title: "Item 6",
		description:
			"Description Some quick example text to build on the card title and make up the bulk of the card.",
		amount: 600,
		currency: "INR",
		img: "https://picsum.photos/400/200?random=6",
	},
	{
		id: "item-7",
		title: "Item 7",
		description:
			"Description Some quick example text to build on the card title and make up the bulk of the card.",
		amount: 700,
		currency: "USD",
		img: "https://picsum.photos/400/200?random=7",
	},
	{
		id: "item-8",
		title: "Item 8",
		description:
			"Description Some quick example text to build on the card title and make up the bulk of the card.",
		amount: 800,
		currency: "USD",
		img: "https://picsum.photos/400/200?random=8",
	},
	{
		id: "item-9",
		title: "Item 9",
		description:
			"Description Some quick example text to build on the card title and make up the bulk of the card.",
		amount: 900,
		currency: "USD",
		img: "https://picsum.photos/400/200?random=9",
	},
];

export const getById = (id: string) => items.find((item) => item.id === id);
