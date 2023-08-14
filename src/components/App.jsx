
import '../styles/App.css';
import '../styles/Banner.css';
import '../styles/Cart.css';
import logo from '../assets/logo.png'
import Banner from './Banner';
// import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Recommendation from './Recommendation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
      <Recommendation />
			</Banner>
        {/* <Cart /> */}
      </header>
      <main>
        <div className='wrapper'>
          <ShoppingList />
        </div>
      </main>
    </div>
  );
}

export default App;
