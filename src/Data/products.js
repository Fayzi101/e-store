export const productsDB = [
  {
    id: 1,
    image: "/images/products/jw1.jpg",
    title: "Jewellery1",
    description: "This is one of our best selling items",
    price: 100000,
    category: "Gold",
    rating: 5,
  },
  {
    id: 2,
    image: "/images/products/jw2.jpg",
    title: "Jewellery2",
    description: "This is one of our best selling items ",
    price: 200000,
    category: "Diamond",
    rating: 4,
  },
  {
    id: 3,
    image: "/images/products/jw3.jpg",
    title: "Jewellery22",
    description: "This is one of our best selling items",
    price: 300000,
    category: "Diamond",
    rating: 3,
  },
  {
    id: 4,
    image: "/images/products/jw4.jpg",
    title: "Jewellery1111",
    description: "This is one of our best selling items",
    price: 400000,
    category: "Gold",
    rating: 2,
  },
  {
    id: 5,
    image: "/images/products/jw5.jpg",
    title: "Jewellery11111",
    description: "This is one of our best selling items",
    price: 500000,
    category: "Gold",
    rating: 1,
  },

  {
    id: 6,
    image: "/images/products/jw1.jpg",
    title: "Jewellery1",
    description: "This is one of our best selling items",
    price: 300000,
    category: "Gold",
    rating: 3,
  },
];

export const getProductById = (id) => {
  return productsDB.find((product) => product.id === Number(id));
};

export const getVisibleProducts = (selectedCategories) => {
  if (selectedCategories.length === 0) return productsDB;

  const prods = productsDB.filter((product) =>
    selectedCategories.includes(product.category)
  );

  return prods;
};
