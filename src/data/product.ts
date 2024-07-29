export interface Product {
  id: number;
	photoSrc: string
	oldPrice?: number
	price: number;
	additional: string
	title: string;
	description: string[];
}