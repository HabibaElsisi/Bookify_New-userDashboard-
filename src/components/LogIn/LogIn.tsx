import axios from 'axios';
import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { TOKEN_KEY } from '../../utils/consts';
import { UserTokenContext } from '../../context/UserTokenContext';

export default function LogIn() {
	const navigate = useNavigate();
	const { setLogin } = useContext(UserTokenContext);

	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	async function submitForm(values) {
		setLoading(true);
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_API_URL}auth/signIn`,
				values
			);
			if (response.status === 200 && response.data.token) {
				localStorage.setItem(TOKEN_KEY, response.data.token);
				setError('');
				setLogin(true);
				navigate('/');
			} else {
				setError('Failed to sign ip. Please try again.');
			}
		} catch (error) {
			setError(
				error.response?.data?.message || 'Failed to sign ip. Please try again.'
			);
		} finally {
			setLoading(false);
		}
	}

	const validationSchema = Yup.object({
		email: Yup.string()
			.email('Invalid email format')
			.required('Email is required'),
		password: Yup.string()
			.matches(
				/^[A-Za-z0-9@#$%^&*!]{8,}$/,
				'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
			)
			.required('Password is required'),
	});

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema,
		onSubmit: submitForm,
	});

	return (
		<div className='container py-4'>
			<form className='w-75 mx-auto' onSubmit={formik.handleSubmit}>
				<h2 className='my-3'>Login Now:</h2>
				{error ? <p className='alert alert-danger'>{error}</p> : ''}

				<label htmlFor='email'>email:</label>
				<input
					type='email'
					id='email'
					className='form-control mb-2'
					name='email'
					onChange={formik.handleChange}
					value={formik.values.email}
					onBlur={formik.handleBlur}
				/>
				{formik.errors.email && formik.touched.email ? (
					<p className='alert alert-danger'>
						{formik.errors.email as React.ReactNode}
					</p>
				) : (
					''
				)}

				<label htmlFor='password'>password:</label>
				<input
					type='password'
					id='password'
					className='form-control mb-2'
					name='password'
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.errors.password && formik.touched.password ? (
					<p className='alert alert-danger'>
						{formik.errors.password as React.ReactNode}
					</p>
				) : (
					''
				)}

				{/* Forgot Password Link */}
				<Link to='/ForgotPassword' style={{ color: 'red', opacity: '0.5' }}>
					Forgot Password?
				</Link>

				{loading ? (
					<button className='btn btn-success ms-auto d-block mt-3'>
						<RotatingLines
							strokeColor='white'
							strokeWidth='5'
							animationDuration='0.75'
							width='60'
							visible={true}
						/>
					</button>
				) : (
					<button
						disabled={!(formik.isValid && formik.dirty)}
						className='btn form-btn ms-auto d-block '
						type='submit'>
						Login
					</button>
				)}
			</form>
		</div>
	);
}
