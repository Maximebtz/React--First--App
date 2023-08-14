
import '../styles/App.css';
import '../styles/Banner.css';
import '../styles/Cart.css';
import logo from '../assets/logo.png'
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Recommendation from './Recommendation';
import Footer from './Footer';
import { useState } from 'react';

function App() {

  const [cart, updateCart] = useState([])

  return (
    <div className="App">
      <header className="App-header">
      <Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
        <div className="title">
          <h1 className='lmj-title'>La maison jungle</h1>
          <Recommendation />
        </div>
			</Banner>
      </header>
      <main>
        <div className="main">
          <Cart cart={cart} updateCart={updateCart} />
        <div className='wrapper'>
          <ShoppingList cart={cart} updateCart={updateCart} />
        </div>
        </div>
      </main>
        <Footer />
    </div>
  );
}

export default App;
