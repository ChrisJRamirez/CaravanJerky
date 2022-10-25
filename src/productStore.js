// coffee = price_1LwYqfDMObmkQJeGV3CwxDov
// sunglasses = price_1LwYrWDMObmkQJeG1aroym7b
// camera = price_1LwZJMDMObmkQJeGCDGOwfaQ


const productsArray = [
  {
    id: "price_1LwYqfDMObmkQJeGV3CwxDov",
    title: "Coffee",
    price: 4.99
  },
  {
    id: "price_1LwYrWDMObmkQJeG1aroym7b",
    title: "Sunglasses",
    price: 9.99
  },
  {
    id: "price_1LwZJMDMObmkQJeGCDGOwfaQ",
    title: "Camera",
    price: 39.99
  }
];

function getProductData(id) {
  let productData = productsArray.find(product => product.id === id);

  if (productData === undefined) {
    console.log("Product data does not exist for ID" + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };