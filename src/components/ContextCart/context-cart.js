import React, { createContext, useReducer } from "react";

const initialState = {
    cart: [],
    totalAmount: 0
}
const cartReducer = (state, action) =>{
    if(action.type === 'ADD'){
        const newTotal = state.totalAmount + action.payload.amount * action.payload.price;
        const existing = state.cart.findIndex(item => item.id === action.payload.id);
        // if we found the item => we access to it and increase value
        const existingCart = state.cart[existing];
        // if it's not existed => we concat it
        let updatedItem;
        let updatedItems;
        if(existingCart){
          updatedItem = {
            ...existingCart,
            amount: existingCart.amount + action.payload.amount
          };
          // increase value 
          updatedItems = [...state.cart];
          // copy old array of state and update it with the index we found
          updatedItems[existing] = updatedItem;
        }
        else{
          updatedItems = [...state.cart, action.payload];
        }
        return {
            cart: updatedItems,
            totalAmount: newTotal
        }
    }
    if(action.tyoe === 'REMOVE'){
        const existing = state.cart.findIndex(item => item.id === action.payload);
        const existingItem = state.cart[existing];
        let updatedItems;
        if(existingItem.amount === 1){
          updatedItems = state.cart.filter(items =>{
            return items.id !== action.payload;
          })
        }
        else{
          const updatedItem = {...existingItem, amount: existingItem.amount - 1};
          updatedItems = [...state.cart];
          updatedItems[existing] = updatedItem;
        }

        const total = updatedItems.reduce((acc, item) =>{
          return acc + item.amount * item.price;
        }, 0)
        return {
          cart: updatedItems,
          totalAmount: total
        }
    }
    return initialState;
}
const CartContext = createContext({
  cart: [],
  totalAmount: 0,
  removeItem: (id) => {},
  setCart: (item) => {},
});
// we have to use concat => return a new array

export const CartContextProvider = (props) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
    const setCartHandler = (item) => {
        cartDispatch({
            type: 'ADD',
            payload: item
        })
    };
  const removeItem = (id) => {
      cartDispatch({
          type: 'REMOVE',
          payload: id
      })
  };
  return (
    <CartContext.Provider
      value={{
        cart: cartState.cart,
        totalAmount: cartState.totalAmount,
        setCart: setCartHandler,
        removeItem: removeItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
