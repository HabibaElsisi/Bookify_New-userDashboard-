import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import axios from 'axios';
import { UserTokenContext } from '../../context/UserTokenContext';
import { TOKEN_KEY } from '../../utils/consts';

export default function Navbar() {
	const [searchQuery, setSearchQuery] = useState('');
	const navigate = useNavigate();

	const { isLogin, setLogin } = useContext(UserTokenContext);

	function onLogout() {
		setLogin(false);
		localStorage.removeItem(TOKEN_KEY);
	}

	const handleSearch = async e => {
		e.preventDefault();
		try {
			const response = await axios.get(
				`https://bookify-new.onrender.com/api/v1/book?keyword=${searchQuery}`
			);
			const books = response.data.book;
			// Find the first book with a title matching the search query
			const matchingBook = books.find(
				book => book.title.toLowerCase() === searchQuery.toLowerCase()
			);
			if (matchingBook) {
				// Navigate to the book page using the book's slug
				navigate(`/book/${matchingBook.slug}`);
			} else {
				// No matching book found, you can display a message or handle it as needed
				console.log('No matching book found');
			}
		} catch (error) {
			console.error('Error searching books:', error);
		}
	};

	return (
		<nav className='navbar navbar-expand-lg blueNavbar'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					<img src={logo} alt='logo' />
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<Link className='nav-link whiteText' to='/'>
								Home
							</Link>
						</li>
						<li className='nav-item dropdown'>
							<a
								className='nav-link dropdown-toggle whiteText'
								href='#'
								role='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								DISCOVER
							</a>
							<ul className='dropdown-menu'>
								{/* Dropdown content */}
								<h3 className=' d-flex justify-content-between w-75 mx-auto  h3 '>
									Genres
								</h3>
								<li>
									<a className='dropdown-item' href='#'>
										Action & Adventure
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Bios & History{' '}
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										{' '}
										Children's
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Fantasy{' '}
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Historical Fiction{' '}
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										{' '}
										Horror
									</a>
								</li>

								<li>
									<a className='dropdown-item' href='#'>
										Literary Fiction{' '}
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Mystery & Thriller{' '}
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Non-Fiction{' '}
									</a>
								</li>
								<Link className='dropdown-item' to='/genres/romance'>
									Romance
								</Link>
								<li>
									<a className='dropdown-item' href='#'>
										Science Fiction{' '}
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Young Adult{' '}
									</a>
								</li>
								<li>
									<hr className='dropdown-divider' />
								</li>
								<h3 className=' d-flex justify-content-between w-75 mx-auto  h3 '>
									Resources
								</h3>
								<li>
									<a className='dropdown-item blackText' href='#'>
										Authors
									</a>
								</li>
								<li>
									<a className='dropdown-item blackText' href='#'>
										Languages
									</a>
								</li>
								<li>
									<a className='dropdown-item blackText' href='#'>
										Genres
									</a>
								</li>
								<li>
									<a className='dropdown-item blackText' href='#'>
										Articles
									</a>
								</li>
								<li>
									<a className='dropdown-item blackText' href='#'>
										Author Interviews
									</a>
								</li>
								<li>
									<a className='dropdown-item blackText' href='#'>
										Discuss
									</a>
								</li>
							</ul>
						</li>
					</ul>
					<form className='d-flex' onSubmit={handleSearch}>
						<input
							className='form-control me-2'
							type='search'
							placeholder='Search by title, author or keywords'
							aria-label='Search'
							value={searchQuery}
							onChange={e => setSearchQuery(e.target.value)}
						/>
						<button className='btn original-button' type='submit'>
							Search
						</button>
					</form>
					<ul className='navbar-nav ms-auto mt-2 mt-lg-0'>
						<li className='nav-item d-flex align-items-center'>
							<a href=''>
								<i className='fa-brands fa-facebook mx-2'></i>
							</a>
							<a href=''>
								<i className='fa-brands fa-google mx-2'></i>
							</a>
							<a href=''>
								<i className='fa-brands fa-youtube mx-2'></i>
							</a>
						</li>

						{!isLogin && (
							<>
								<li className='nav-item'>
									<Link className='nav-link' to='/Register'>
										Register
									</Link>
								</li>

								<li className='nav-item'>
									<Link className='nav-link' to='/logIn'>
										Login
									</Link>
								</li>
							</>
						)}
						{isLogin && (
							<li className='nav-item'>
								<Link onClick={onLogout} className='nav-link' to='/login'>
									Logout
								</Link>
							</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
}
