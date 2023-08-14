import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'


// Définition d'un composant React appelé CareScale qui prend des props en paramètres
function CareScale({ scaleValue, careType }) {
    // Le composant reçoit deux props : scaleValue et careType

    // Définition d'un tableau contenant les valeurs de la plage
    const range = [1, 2, 3];

    // On détermine le type d'icône en fonction du careType reçu
    const scaleType = careType === 'light' ? (
        <img src={Sun} alt='sun-icon' />
    ) : (
        <img src={Water} alt='water-icon' />
    )

    // Retourne un élément div qui contient les icônes en fonction de la valeur de scaleValue
    return (
        <div>
            {/* Utilisation de la méthode map pour parcourir le tableau range */}
            {range.map((rangeElem) => 
                // Si scaleValue est supérieure ou égale à rangeElem, affiche l'icône correspondante
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )} 
        </div>
    );
}

// Exporte le composant CareScale pour qu'il puisse être utilisé ailleurs
export default CareScale;
