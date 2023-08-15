import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
  // Utilisation de useState pour gérer l'état local inputValue
  const [inputValue, setInputValue] = useState('')

  // Fonction appelée lorsqu'il y a des changements dans l'input
  function handleInput(e) {
    // Mise à jour de l'état inputValue avec la valeur de l'input
    setInputValue(e.target.value)
  }

  // Fonction appelée lorsque l'input perd le focus (blur)
  function handleBlur() {
    // Vérification si l'adresse email contient un caractère '@'
    if (!inputValue.includes('@')) {
      // Affichage d'une alerte si l'adresse email n'est pas valide
      alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
    }
  }

  return (
    <footer className='lmj-footer'>
      {/* Élément du pied de page */}
      <div className='lmj-footer-elem'>
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      {/* Élément du pied de page */}
      <div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
      {/* Champ d'input pour l'adresse email */}
      <input
        placeholder='Entrez votre mail'
        onChange={handleInput} // Appel de handleInput lors des changements dans l'input
        value={inputValue} // Utilisation de l'état inputValue pour la valeur de l'input
        onBlur={handleBlur} // Appel de handleBlur lors de la perte de focus de l'input
      />
    </footer>
  );
}

export default Footer;
