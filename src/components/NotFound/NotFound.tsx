import { Link } from 'react-router-dom';
import img from '../../assets/error.svg';

export default function NotFound() {
	return (
		<div className='w-50 mx-auto my-3 text-center'>
			<h2 className='my-30'>Not Found</h2>
			<p>
				The page you are looking for does not exist.{' '}
				<Link to='/'>Go to home page.</Link>
			</p>
			<img src={img} alt='Not found!' className='my-4' />
		</div>
	);
}
