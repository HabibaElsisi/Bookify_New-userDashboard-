import { useState } from 'react';

export default function About() {
	const [fruits, setFruits] = useState(['banana', 'mango']);

	function addMe(e) {
		if (e.key == 'Enter') {
			const newFruits = [...fruits];
			newFruits.push(e.target.value);
			setFruits(newFruits);
		}
	}

	return (
		<>
			<div>About</div>
			<input
				type='text  '
				className='form-control my-4 w-25'
				onKeyDown={addMe}
			/>

			<ul>
				{fruits.map(ele => (
					<li key={ele}>{ele}</li>
				))}
			</ul>
		</>
	);
}
