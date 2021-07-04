import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../ContextCart/context-cart";
import CartItem from "./CartItem";
const Cart = ({ setOverlays, orderHandler }) => {
  const cart = useContext(CartContext);
  const onRemove = (id) => {
    cart.removeItem(id);
  };
  const onAdd = (item) =>{
    cart.setCart({
      ...item,
      amount: 1
    });
    // add new with + button
  }
  const hasItem = cart.cart.length;
  const cartItems = cart.cart.map((items) => {
    return (
      <CartItem
        key={items.id}
        amount={items.amount}
        name={items.name}
        price={items.price}
        onRemove={onRemove.bind(null, items.id)}
        // use bind to get data from event => add it again to event
        // the function will receive that value when execute
        onAdd={onAdd.bind(null, items)}
        id={items.id}
      />
    );
  });
  return (
    <Modal changeOverlay={setOverlays}>
      <ul className={styles["cart-items"]}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>${cart.totalAmount.toFixed(2)}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={setOverlays} className={styles["button--alt"]}>
          Close
        </button>
        {hasItem > 0 && (
          <button onClick={orderHandler} className={styles.button}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
