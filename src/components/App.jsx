// Import des fichiers de styles
import '../styles/App.css';
import '../styles/Banner.css';
import '../styles/Cart.css';

// Import de l'image du logo
import logo from '../assets/logo.png';

// Import des composants React
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Recommendation from './Recommendation';
import Footer from './Footer';

// Import des hooks de React
import { useState, useEffect } from 'react';

// Définition du composant principal "App"
function App() {
  // Récupération du panier depuis le localStorage, s'il existe
  const savedCart = localStorage.getItem('cart');
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);

  // Utilisation de useEffect pour mettre à jour le localStorage lorsque le panier change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Rendu du composant "App"
  return (
    <div className="App">
      {/* En-tête de l'application */}
      <header className="App-header">
        {/* Utilisation du composant "Banner" pour l'en-tête */}
        <Banner>
          {/* Affichage du logo */}
          <img src={logo} alt='La maison jungle' className='lmj-logo' />
          <div className="title">
            {/* Titre de l'application */}
            <h1 className='lmj-title'>La maison jungle</h1>
            {/* Affichage du composant "Recommendation" */}
            <Recommendation />
          </div>
        </Banner>
      </header>
      {/* Corps principal de l'application */}
      <main>
        <div className="main">
          {/* Utilisation du composant "Cart" pour afficher le panier */}
          <Cart cart={cart} updateCart={updateCart} />
          <div className='wrapper'>
            {/* Utilisation du composant "ShoppingList" pour afficher la liste des achats */}
            <ShoppingList cart={cart} updateCart={updateCart} />
          </div>
        </div>
      </main>
      {/* Pied de page de l'application */}
      <Footer />
    </div>
  );
}

// Export du composant "App" pour pouvoir l'utiliser ailleurs
export default App;
