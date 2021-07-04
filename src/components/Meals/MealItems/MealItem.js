import React, {useContext} from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../ContextCart/context-cart';
const MealItem = ({name, description, price, id}) =>{
    const cartContext = useContext(CartContext);
    const setAmountHandler = (amount) =>{
        const item = {
            id: id,
            name: name,
            amount: amount,
            price: price
        }
        cartContext.setCart(item);
    }
    return(
        <li className={styles.meal}>
            <div>
                <h3>{name}</h3>
                <div className={styles.description}>{description}</div>
                <div className={styles.price}>{`$${price.toFixed(2)}`}</div>
            </div>
            <div>
                <MealItemForm id={id} setAmountHandler={setAmountHandler}/>
            </div>
        </li>
    )
}

export default MealItem;