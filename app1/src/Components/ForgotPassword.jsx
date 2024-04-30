import React, { useState } from 'react';
import axios from 'axios';
 // Import the specific image file
// import backgroundImage from '../assets/images.jpeg';
export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/forgotPassword', { email });
      setMessage(response.data.message);
      setError('');
    } catch (error) {
      setMessage('');
      setError(error.response.data.message);
    }
  };

  // style={{ backgroundImage: `url(${backgroundImage})` }}

  return (
    <div className="row justify-content-center align-items-center h-100 p-4" >
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
            <h2>ForgotPassword</h2>
              <form onSubmit={handleForgotPassword} className="my-4">
                <div className="mb-3">
                  <label className="form-label label-small" htmlFor='email'>Email:</label>
                  <input type='text' className='form-control mb-3' id='email' name='email' />
                </div>
                {message && <p className="alert alert-success">{message}</p>}
                {error && <p className="alert alert-danger">{error}</p>}
                <button className="btn original-button" type="submit">
                  Send Code
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    
  );
}
