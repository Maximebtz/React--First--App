import CareScale from './Carescale'
import '../styles/PlantItem.css'

function PlantItem({ id, cover, name, water, light }) {
	return (
		<li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

	function handleClick(e) {
		console.log('✨ Ceci est mon event :', e)
	};

export default PlantItem