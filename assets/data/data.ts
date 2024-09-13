import { ImageSourcePropType } from "react-native";

// const the images statically at the top
const sweaterImage = require("../../assets/images/sweater.png");
const longDressImage = require("../../assets/images/longDress.png");
const denimImage = require("../../assets/images/denim.jpg");
const blackShirtImage = require("../../assets/images/blackShirt.jpg");
const whiteShirtImage = require("../../assets/images/whiteShirt.jpg");
const blueSweaterImage = require("../../assets/images/blueSweater.jpg");
const shoe1 =require( "../../assets/images/shoe1.jpg");
const shoe2 = require("../../assets/images/shoe2.jpg");
const shoe3 = require("../../assets/images/shoe3.jpg");
const shoe4 = require("../../assets/images/shoe4.jpg");
const shoe5 = require("../../assets/images/shoe5.jpg");
const shoe6 = require("../../assets/images/shoe6.jpg");
const shoe7 = require("../../assets/images/shoe7.jpg");
const shoe8 = require("../../assets/images/shoe8.jpg");
const shoe9 = require("../../assets/images/shoe9.jpg");
const shoe10 = require("../../assets/images/shoe10.jpg");
const shoe11 = require("../../assets/images/shoe11.jpg");
const shoe12 =require( "../../assets/images/shoe12.jpg");
const shirt1 = require("../../assets/images/t-shirt1.jpg");
const shirt2 = require("../../assets/images/t-shirt2.jpg");
const shirt3 = require("../../assets/images/t-shirt3.jpg");
const shirt4 = require("../../assets/images/t-shirt4.jpg");
const shirt5 = require("../../assets/images/t-shirt5.jpg");
const shirt6 = require("../../assets/images/t-shirt6.jpg");
const shirt7 = require("../../assets/images/t-shirt7.jpg");
const shirt8 = require("../../assets/images/t-shirt8.jpg");
const hoodie1 = require("../../assets/images/hoodie1.jpg");
const hoodie2 = require("../../assets/images/hoodie2.jpg");
const hoodie3 = require("../../assets/images/hoodie3.jpg");
const hoodie4 = require("../../assets/images/hoodie4.jpg");
const hoodie5 = require("../../assets/images/hoodie5.jpg");
const hoodie6 = require("../../assets/images/hoodie6.jpg");
const hoodie7 = require("../../assets/images/hoodie7.jpg");
const hoodie8 = require("../../assets/images/hoodie8.jpg");
const dress1 = require("../../assets/images/dress1.jpg");
const dress2 = require("../../assets/images/dress2.jpg");
const dress3 = require("../../assets/images/dress3.jpg");
const dress4 = require("../../assets/images/dress4.jpg");
const dress5 =require("../../assets/images/dress5.jpg");
const dress6 = require("../../assets/images/dress6.jpg");
const dress7 = require("../../assets/images/dress7.jpg");
const dress8 = require("../../assets/images/dress8.jpg");
const jeans1 = require("../../assets/images/jeans1.jpg");
const jeans2 = require("../../assets/images/jeans2.jpg");
const jeans3 = require("../../assets/images/jeans3.jpg");
const jeans4 = require("../../assets/images/jeans4.jpg");
const jeans5 = require("../../assets/images/jeans5.jpg");
const jeans6 = require("../../assets/images/jeans6.jpg");
const jeans7 = require("../../assets/images/jeans7.jpg");
const jeans8 =require("../../assets/images/jeans8.jpg");
const jacket1 =require("../../assets/images/jacket1.jpg");
const jacket2 = require("../../assets/images/jacket2.jpg");
const jacket3 = require("../../assets/images/jacket3.jpg");
const jacket4 = require("../../assets/images/jacket4.jpg");
const jacket5 = require("../../assets/images/jacket5.jpg");
const jacket6 = require("../../assets/images/jacket6.jpg");
const jacket7 = require("../../assets/images/jacket7.jpg");
const jacket8 =require ("../../assets/images/jacket8.jpg");
const bag1 = require("../../assets/images/bag1.jpg");
const bag2 = require("../../assets/images/bag2.jpg");
const bag3 = require("../../assets/images/bag3.jpg");
const bag4 = require("../../assets/images/bag4.jpg");
const bag5 = require("../../assets/images/bag5.jpg");
const bag6 = require("../../assets/images/bag6.jpg");
const bag7 = require("../../assets/images/bag7.jpg");
const bag8 = require("../../assets/images/bag8.jpg");
const suit1 = require("../../assets/images/suit1.jpg");
const suit2 = require("../../assets/images/suit2.jpg");
const suit3 = require("../../assets/images/suit3.jpg");
const suit4 = require("../../assets/images/suit4.jpg");
const suit5 = require("../../assets/images/suit5.jpg");
const suit6 = require("../../assets/images/suit6.jpg");
const suit7 = require("../../assets/images/suit7.jpg");
const suit8 = require("../../assets/images/suit8.jpg");


export type Product = {
  //   id: number | string;
  //   image: any;  // Image category is 'any' for require() consts
  //   price: string | number;
  // title: string;
  // text?: string;
   id: string;
  image?:  ImageSourcePropType | string; // Assuming 'shirt2' is the URL or path to an image
  name: string;
  text: string;
  category: string;
  size?: string[]; // Array of available sizes
  color: string[]; // Array of available colors
  gender: "male" | "female" | "unisex"; // Gender can be male, female, or unisex
  price: number;
};

// Export the DATA array
export const DATA: Product[] = [
  // {
  //   id: 1,
  //   image: sweaterImage,
  //   title: "Turtleneck Sweater",
  //   price: "$ 39.99",
  // },
  // {
  //   id: 2,
  //   image: longDressImage,
  //   title: "Long Sleeve Dress",
  //   price: "$ 45",
  // },
  // {
  //   id: 3,
  //   image: denimImage,
  //   title: "Denim Jeans",
  //   price: "$ 25",
  // },
  // {
  //   id: 4,
  //   image: blackShirtImage,
  //   title: "Black Cotton Shirt",
  //   price: "$ 30",
  // },
  // {
  //   id: 5,
  //   image: whiteShirtImage,
  //   title: "White Loose Shirt",
  //   price: "$ 28.99",
  // },
  // {
  //   id: 6,
  //   image: blueSweaterImage,
  //   title: "Blue Sweater",
  //   price: "$ 50",
  // },
  {
    id: "1",
    image: shirt1,
    name: "Casual T-Shirt 1",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "COLLECTION",
    size: ["XL", "L", "M", "S"],
    color: ["black", "gray", "green"],
    gender: "male",
    price: 45,
  },
  {
    id: "2",
    image: shirt2,
    name: "Casual T-Shirt 2",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "COLLECTION",
    size: ["M", "L", "XL"],
    color: ["black", "red", "brown"],
    gender: "male",
    price: 55,
  },
  {
    id: "3",
    image: shirt3,
    name: "Casual T-Shirt 3",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "COLLECTION",
    size: ["L", "XL"],
    color: ["brown", "gray", "yellow"],
    gender: "female",
    price: 75,
  },
  {
    id: "4",
    image: shirt4,
    name: "Casual T-Shirt 4",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "COLLECTION",
    size: ["M", "L", "XL"],
    color: ["gray", "orange", "blue"],
    gender: "female",
    price: 25,
  },
  {
    id: "5",
    image: shirt5,
    name: "Casual T-Shirt 5",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "COLLECTION",
    size: ["M", "L", "XL"],
    color: ["black", "brown", "blue"],
    gender: "female",
    price: 15,
  },
  {
    id: "6",
    image: shirt6,
    name: "Casual T-Shirt 6",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "COLLECTION",
    size: ["M", "L", "XL"],
    color: ["gray", "purple", "yellow"],
    gender: "female",
    price: 25,
  },
  {
    id: "7",
    image: shirt7,
    name: "Casual T-Shirt 7",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "COLLECTION",
    size: ["M", "L", "XL"],
    color: ["black", "orange", "blue"],
    gender: "male",
    price: 25,
  },
  {
    id: "8",
    image: shirt8,
    name: "Casual T-Shirt 8",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "COLLECTION",
    size: ["M", "XL"],
    color: ["gray", "red", "blue"],
    gender: "male",
    price: 35,
  },

  {
    id: "9",
    image: hoodie1,
    name: "Casual Hoodie 1",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "Hoodies",
    size: ["S", "L", "XL"],
    color: ["blue", "red", "green"],
    gender: "female",
    price: 85,
  },
  {
    id: "10",
    image: hoodie2,
    name: "Casual Hoodie 2",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "Hoodies",
    size: ["S", "L", "XL"],
    color: ["gray", "purple", "black"],
    gender: "female",
    price: 95,
  },
  {
    id: "11",
    image: hoodie3,
    name: "Casual Hoodie 3",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "Hoodies",
    size: ["S", "M", "XL"],
    color: ["red", "blue", "black"],
    gender: "male",
    price: 95,
  },
  {
    id: "12",
    image: hoodie4,
    name: "Casual Hoodie 4",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "Hoodies",
    size: ["S", "XL"],
    color: ["gray", "blue", "red"],
    gender: "male",
    price: 125,
  },
  {
    id: "13",
    image: hoodie5,
    name: "Casual Hoodie 5",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "Hoodies",
    size: ["S", "XL"],
    color: ["gray", "blue", "red"],
    gender: "female",
    price: 250,
  },
  {
    id: "14",
    image: hoodie6,
    name: "Casual Hoodie 6",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "Hoodies",
    size: ["S", "XL"],
    color: ["gray", "yellow", "blue"],
    gender: "male",
    price: 125,
  },
  {
    id: "15",
    image: hoodie7,
    name: "Casual Hoodie 7",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "Hoodies",
    size: ["S", "M", "L", "XL"],
    color: ["black", "blue"],
    gender: "male",
    price: 450,
  },
  {
    id: "16",
    image: hoodie8,
    name: "Casual Hoodie 8",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "Hoodies",
    size: ["S", "M", "L", "XL"],
    color: ["green", "yellow", "red"],
    gender: "female",
    price: 355,
  },

  {
    id: "17",
    image: shoe5,
    name: "Casual SHOES 1",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "SHOES",
    size: ["40", "42", "44", "46"],
    color: ["black", "gray"],
    gender: "male",
    price: 200,
  },
  {
    id: "18",
    image: shoe6,
    name: "Casual SHOES 2",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "SHOES",
    size: ["40", "42", "44", "46"],
    color: ["brown", "gray"],
    gender: "female",
    price: 250,
  },
  {
    id: "19",
    image: shoe7,
    name: "Casual SHOES 3",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "SHOES",
    size: ["36", "38", "40", "42"],
    color: ["black", "gray", "blue"],
    gender: "female",
    price: 685,
  },
  {
    id: "20",
    image: shoe8,
    name: "Casual SHOES 4",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "SHOES",
    size: ["36", "38", "40", "42"],
    color: ["black", "gray"],
    gender: "male",
    price: 255,
  },
  {
    id: "21",
    image: shoe9,
    name: "Casual SHOES 5",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "SHOES",
    size: ["36", "38", "40", "42"],
    color: ["purple", "gray", "black"],
    gender: "male",
    price: 355,
  },
  {
    id: "22",
    image: shoe10,
    name: "Casual SHOES 6",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "SHOES",
    size: ["36", "38", "40", "42"],
    color: ["purple", "gray", "black"],
    gender: "male",
    price: 200,
  },
  {
    id: "23",
    image: shoe11,
    name: "Casual SHOES 7",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "SHOES",
    size: ["36", "38", "40", "42"],
    color: ["purple", "green", "black"],
    gender: "male",
    price: 100,
  },
  {
    id: "24",
    image: shoe12,
    name: "Casual SHOES 8",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "SHOES",
    size: ["36", "38", "40", "42"],
    color: ["purple", "green", "black"],
    gender: "male",
    price: 135,
  },
  {
    id: "25",
    image: dress1,
    name: "Casual Dress 1",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "CLOTHING",
    size: ["L", "XL"],
    color: ["purple", "blue", "gray"],
    gender: "female",
    price: 355,
  },
  {
    id: "26",
    image: dress2,
    name: "Casual Dress 2",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "CLOTHING",
    size: ["S", "M", "XL"],
    color: ["black", "gray", "green"],
    gender: "female",
    price: 255,
  },
  {
    id: "27",
    image: dress3,
    name: "Casual Dress 3",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "CLOTHING",
    size: ["S", "M", "XL"],
    color: ["purple", "blue", "red"],
    gender: "female",
    price: 65,
  },
  {
    id: "28",
    image: dress4,
    name: "Casual Dress 4",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "CLOTHING",
    size: ["S", "L", "XL"],
    color: ["yellow", "blue", "orange"],
    gender: "female",
    price: 185,
  },
  {
    id: "29",
    image: dress5,
    name: "Casual Dress 5",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "CLOTHING",
    size: ["S", "L", "XL"],
    color: ["yellow", "orange"],
    gender: "female",
    price: 555,
  },
  {
    id: "30",
    image: dress6,
    name: "Casual Dress 6",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "CLOTHING",
    size: ["S", "M"],
    color: ["yellow", "blue", "black"],
    gender: "female",
    price: 345,
  },
  {
    id: "31",
    image: dress7,
    name: "Casual Dress 7",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "CLOTHING",
    size: ["S", "M"],
    color: ["orange", "blue", "black"],
    gender: "female",
    price: 345,
  },
  {
    id: "32",
    image: dress8,
    name: "Casual Dress 8",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "CLOTHING",
    size: ["M", "L"],
    color: ["brown", "blue", "red"],
    gender: "female",
    price: 685,
  },
  {
    id: "33",
    image: jeans1,
    name: "Casual Jeans 1",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "COLLECTION",
    size: ["S", "M", "L"],
    color: ["blue", "black"],
    gender: "male",
    price: 55,
  },
  {
    id: "34",
    image: jeans2,
    name: "Casual Jeans 2",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "COLLECTION",
    size: ["S", "M"],
    color: ["blue", "black"],
    gender: "female",
    price: 75,
  },
  {
    id: "35",
    image: jeans3,
    name: "Casual Jeans 3",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "COLLECTION",
    size: ["M", "L", "XL"],
    color: ["blue", "black"],
    gender: "male",
    price: 95,
  },
  {
    id: "36",
    image: jeans4,
    name: "Casual Jeans 4",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "COLLECTION",
    size: ["M", "L", "XL"],
    color: ["blue", "black"],
    gender: "female",
    price: 100,
  },
  {
    id: "37",
    image: jeans5,
    name: "Casual Jeans 5",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "COLLECTION",
    size: ["M", "L", "XL"],
    color: ["blue", "black"],
    gender: "female",
    price: 200,
  },
  {
    id: "37",
    image: jeans6,
    name: "Casual Jeans 6",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "COLLECTION",
    size: ["S", "L", "XL"],
    color: ["blue", "black"],
    gender: "female",
    price: 200,
  },
  {
    id: "38",
    image: jeans7,
    name: "Casual Jeans 7",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "COLLECTION",
    size: ["M", "L", "XL"],
    color: ["blue", "black"],
    gender: "male",
    price: 180,
  },
  {
    id: "39",
    image: jeans8,
    name: "Casual Jeans 8",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "COLLECTION",
    size: ["M", "L", "XL"],
    color: ["blue", "black"],
    gender: "male",
    price: 160,
  },
  {
    id: "40",
    image: jacket1,
    name: "Casual Jacket 1",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "COLLECTION",
    size: ["M", "L", "XL"],
    color: ["black", "blue"],
    gender: "male",
    price: 400,
  },
  {
    id: "41",
    image: jacket2,
    name: "Casual Jacket 2",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "COLLECTION",
    size: ["S", "L", "XL"],
    color: ["gray", "brown"],
    gender: "male",
    price: 255,
  },
  {
    id: "42",
    image: jacket3,
    name: "Casual Jacket 3",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "COLLECTION",
    size: ["S", "M"],
    color: ["gray", "brown"],
    gender: "male",
    price: 300,
  },
  {
    id: "43",
    image: jacket4,
    name: "Casual Jacket 4",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "COLLECTION",
    size: ["S", "M", "L"],
    color: ["gray", "brown"],
    gender: "male",
    price: 185,
  },
  {
    id: "44",
    image: jacket5,
    name: "Casual Jacket 5",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "COLLECTION",
    size: ["S", "M", "L"],
    color: ["gray", "brown"],
    gender: "female",
    price: 185,
  },
  {
    id: "45",
    image: jacket6,
    name: "Casual Jacket 6",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "COLLECTION",
    size: ["S", "M", "XL"],
    color: ["gray", "brown", "black"],
    gender: "male",
    price: 285,
  },
  {
    id: "46",
    image: jacket7,
    name: "Casual Jacket 7",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "COLLECTION",
    size: ["S", "M", "XL"],
    color: ["brown", "black"],
    gender: "female",
    price: 425,
  },
  {
    id: "47",
    image: jacket8,
    name: "Casual Jacket 8",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "COLLECTION",
    size: ["M", "L", "XL"],
    color: ["yellow", "orange", "blue"],
    gender: "female",
    price: 335,
  },
  {
    id: "48",
    image: bag1,
    name: "Casual Bag 1",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "ACCESSORIES",
    color: ["black", "blue", "red"],
    gender: "female",
    price: 500,
  },
  {
    id: "49",
    image: bag2,
    name: "Casual Bag 2",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "ACCESSORIES",
    color: ["green", "red", "blue"],
    gender: "male",
    price: 85,
  },
  {
    id: "50",
    image: bag3,
    name: "Casual Bag 3",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "ACCESSORIES",
    color: ["brown", "blue", "orange"],
    gender: "female",
    price: 200,
  },
  {
    id: "51",
    image: bag4,
    name: "Casual Bag 4",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "ACCESSORIES",
    color: ["brown", "blue", "orange"],
    gender: "female",
    price: 25,
  },
  {
    id: "52",
    image: bag5,
    name: "Casual Bag 5",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "ACCESSORIES",
    color: ["yellow", "blue", "black"],
    gender: "female",
    price: 40,
  },
  {
    id: "53",
    image: bag6,
    name: "Casual Bag 6",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "ACCESSORIES",
    color: ["blue", "black", "orange"],
    gender: "female",
    price: 400,
  },
  {
    id: "54",
    image: bag7,
    name: "Casual Bag 7",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "ACCESSORIES",
    color: ["blue", "black", "orange"],
    gender: "female",
    price: 355,
  },
  {
    id: "55",
    image: bag8,
    name: "Casual Bag 8",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "ACCESSORIES",
    color: ["blue", "green", "red"],
    gender: "female",
    price: 100,
  },
  {
    id: "56",
    image: suit1,
    name: "Casual Suit 1",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "Suits",
    size: ["S", "M", "L"],
    color: ["black", "gray", "orange"],
    gender: "male",
    price: 300,
  },
  {
    id: "57",
    image: suit2,
    name: "Casual Suit 2",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "Suits",
    size: ["S", "M", "L"],
    color: ["purple", "orange", "gray"],
    gender: "male",
    price: 400,
  },
  {
    id: "58",
    image: suit3,
    name: "Casual Suit 3",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "Suits",
    size: ["M", "L", "XL"],
    color: ["purple", "orange", "gray"],
    gender: "male",
    price: 200,
  },
  {
    id: "59",
    image: suit4,
    name: "Casual Suit 4",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "Suits",
    size: ["L", "XL"],
    color: ["brown", "orange", "black"],
    gender: "male",
    price: 600,
  },
  {
    id: "60",
    image: suit5,
    name: "Casual Suit 5",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "Suits",
    size: ["L", "XL"],
    color: ["black", "blue", "red"],
    gender: "male",
    price: 750,
  },
  {
    id: "61",
    image: suit6,
    name: "Casual Suit 6",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "Suits",
    size: ["S", "M"],
    color: ["brown", "orange", "black"],
    gender: "female",
    price: 385,
  },
  {
    id: "62",
    image: suit7,
    name: "Casual Suit 7",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "Suits",
    size: ["L", "XL"],
    color: ["red", "blue", "black"],
    gender: "male",
    price: 700,
  },
  {
    id: "63",
    image: suit8,
    name: "Casual Suit 8",
    text: "Fashion never stops. There is always the new project, the new opportunity. The constant thing is to take your time and not get stressed. I just want to do what I do.",
    category: "Suits",
    size: ["S", "M", "XL"],
    color: ["blue", "green", "brown"],
    gender: "male",
    price: 550,
  },

];
