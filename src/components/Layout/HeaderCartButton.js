import React, {useContext, useEffect, useState} from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import CartContext from "../ContextCart/context-cart";
const HeaderCartButton = ({overlayHandler}) => {
  const [isButtoned, setIsButtoned] = useState(false);
  const store = useContext(CartContext);
  const numberOfCartItem = store.cart.reduce((acc, meal) =>{
    return acc + meal.amount;
  }, 0);
  useEffect(() =>{
    if(store.cart.length === 0){
      return;
    }
    setIsButtoned(true);
    const setBtn = setTimeout(() =>{
      setIsButtoned(false);
    }, 300);
    
    return () =>{
      clearTimeout(setBtn);
    }
  }, [store.cart])
  return (
    <button className={`${styles.button} ${isButtoned === true && styles.bump}`}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span onClick={overlayHandler}>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
