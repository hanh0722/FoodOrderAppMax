import React, {useState} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './components/ContextCart/context-cart';
const App = () => {
  const [overlays, setOverlays] = useState(false);

  const overlaysHandler = () =>{
    setOverlays(prevState =>{
      return !prevState
    })
  }
  return (
    <CartContextProvider>
      {overlays === true && <Cart setOverlays={overlaysHandler}/>}
      <Header overlay={overlaysHandler}/>
      <main>
        <Meals/>
      </main>
    </CartContextProvider>
  );
}

export default App;
