import '../styles/Cart.css';
import { useState } from 'react'


function Cart() {
	const monsteraPrice = 8
	const [cart, updateCart] = useState(0)
	const [isOpen, setIsOpen] = useState(false)

	return isOpen ? (
		<div className='lmj-cart'>
			<button className='cart-close' onClick={() => setIsOpen(false)}> Fermer Le Panier</button>
			<h2>Panier</h2>
			Monstera : {monsteraPrice}€
			<button onClick={() => updateCart(cart + 1)}>
				Ajouter
			</button>
			<h3>
				Total : {monsteraPrice * cart}€
			</h3>
		</div>
	) : (
		<button className='cart-open' onClick={() => setIsOpen(true)}> Ouvrir Le Panier</button>
	)
}

export default Cart