import { createContext, useState } from "react";
import { productsArray } from "./productStore";


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

  function getProductQuantity(id){
    // ? is error handling for undefined (wont return quantity for undefined and error out)
    cartProducts.find(product => product.id)?.quantity

    if (quantity === undefined){
      return 0
    }
    return quantity;
  };

  const contextValue = {
    items: [],
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

//Context (cart, addToCart,Removecart)
// Provider => gives react app access to all things in your context
// do not define function inside of the context, defined outside and then passed into the provider