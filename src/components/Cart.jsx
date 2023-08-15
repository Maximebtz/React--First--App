import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(false) // État pour contrôler l'ouverture/fermeture du panier
	const total = cart.reduce( // Calcul du montant total du panier
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats` // Met à jour le titre de la page avec le montant total
	}, [total])

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='cart-close'
				onClick={() => setIsOpen(false)} // Action pour fermer le panier
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{/* Affichage des éléments dans le panier */}
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total : {total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='cart-open'
				onClick={() => setIsOpen(true)} // Action pour ouvrir le panier
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart;
