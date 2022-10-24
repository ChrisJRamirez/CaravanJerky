import { createContext, useState } from "react";
import { productsArray, getProductData } from "./productStore"


export const CartContext = createContext({
  items: [],
  getProductQuantity: () => { },
  addOneToCart: () => { },
  removeOneFromCart: () => { },
  deleteFromCart: () => { },
  getTotalCost: () => { },

});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  function getProductQuantity(id) {
    // ? is error handling for undefined (wont return quantity for undefined and error out)
    const quantity = cartProducts.find(product => product.id === id)?.quantity

    if (quantity === undefined) {
      return 0
    }
    return quantity;
  };

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) { // product not in cart
      setCartProducts(
        [
          ...cartProducts,
          {
            id: id,
            quantity: 1
          }
        ]
      )
    } else { // product in cart
      setCartProducts(
        cartProducts.map(
          product =>                                           // ternary operator
            product.id === id                                  // if condition
              ? { ...product, quantity: product.quantity + 1 } // if statement is true
              : product                                         // if statement is false
        )
      )
    }
  };

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map(
          product =>
            product.id === id
              ? { ...product, quantity: product.quantity - 1 }
              : product
        )
      )
    }
  };

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);
      totalCost += (productData.price * cartItem.quantity);
    });
    return totalCost

  }

  function deleteFromCart(id) {
    setCartProducts(
      cartProducts =>
        cartProducts.filter(currentProduct => {
          return currentProduct.id != id;
        })
    )
  };

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  }
  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
};

export default CartProvider;

//Context (cart, addToCart,Removecart)
// Provider => gives react app access to all things in your context
// do not define function inside of the context, defined outside and then passed into the provider