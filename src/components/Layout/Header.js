import React from 'react';
import styles from './Header.module.css';
import Image from '../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
const Header = ({overlay}) =>{
    return(
        <>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton overlayHandler={overlay}/>
            </header>
            <div className={styles['main-image']}>
                <img src={Image} alt='foods'/>
            </div>
        </>
    )
}

export default Header;