import axios from 'axios';
import { useEffect } from 'react';

export default function Romance() {
	async function getGenre() {
		try {
			const response = await axios.get(
				`https://bookify-new.onrender.com/api/v1/genre/65ece373e9624bf82211fd29`
			);
			console.log('Response data:', response.data);
			// setBook(response.data.genre);
		} catch (error) {
			console.error('Error fetching genre:', error);
		}
	}

	useEffect(() => {
		getGenre();
	}, []);

	return <div>ROMANCE</div>;
}
