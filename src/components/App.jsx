
import '../styles/App.css';
import '../styles/Banner.css';
import '../styles/Cart.css';
import Banner from './Banner';
// import Cart from './Cart';
import ShoppingList from './ShoppingList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
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
