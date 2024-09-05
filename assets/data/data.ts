// Import the images statically at the top
const sweaterImage = require("../../../assets/images/sweater.png");
const longDressImage = require("../../../assets/images/longDress.png");
const denimImage = require("../../../assets/images/denim.jpg");
const blackShirtImage = require("../../../assets/images/blackShirt.jpg");
const whiteShirtImage = require("../../../assets/images/whiteShirt.jpg");
const blueSweaterImage = require("../../../assets/images/blueSweater.jpg");

export type Product = {
    id: number;
    image: any;  // Image type is 'any' for require() imports
    price: string;
    title: string;
};

// Export the DATA array
export const DATA: Product[] = [
  {
    id: 1,
    image: sweaterImage,
    title: "Turtleneck Sweater",
    price: "$ 39.99",
  },
  {
    id: 2,
    image: longDressImage,
    title: "Long Sleeve Dress",
    price: "$ 45",
  },
  {
    id: 3,
    image: denimImage,
    title: "Denim Jeans",
    price: "$ 25",
  },
  {
    id: 4,
    image: blackShirtImage,
    title: "Black Cotton Shirt",
    price: "$ 30",
  },
  {
    id: 5,
    image: whiteShirtImage,
    title: "White Loose Shirt",
    price: "$ 28.99",
  },
  {
    id: 6,
    image: blueSweaterImage,
    title: "Blue Sweater",
    price: "$ 50",
  },
];
