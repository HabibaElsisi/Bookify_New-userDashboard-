import axios from 'axios';
import React, { useState, useEffect } from 'react'; // Combine imports
import { Link } from 'react-router-dom';
import Home from './Home/Home';

export default function Books() { // Renamed the function to start with a capital letter
  let [book, setBook] = useState([]);
  let [loading, setLoading] = useState(false);

  async function getBook() {
    setLoading(true);
    try {
      const response = await axios.get(`https://bookify-new.onrender.com/api/v1/book/660dde88442b9b011d55b508`);
      console.log('Response data:', response.data);
      setBook(response.data.book);
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getBook();
  }, []);

  return (
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col-md-4'>
        <h1 className='my-3'>Book</h1>
          <div className='books p-3'>
            {loading ? (
              <h1 className='text-center my-2'>Loading...</h1>
            ) : (
              <div>
              <img src={book.imgCover} className='w-100' alt='' />
              </div>
            )}
          </div>
        </div>
        <div className='col-md-8'>
     
          {loading ? (
            <h1 className='text-center my-2'>Loading...</h1>
          ) : (
            <div>
              <p>{book.title}</p>
              <p>{book.description}</p>
              <p>{book.genre}</p>
              <p>{book.language}</p>
              <p>{book.myReviews}</p>
              <p>{book.  bookContent}</p>
              <p className='fw-bolder'>{book.author?.name}</p>
              <div className='product-box d-flex justify-content-between'>
                <span>{book.rateCount} <i className='fa-solid fa-star rating-color'></i></span>
              </div>
              <div className="d-flex justify-content-start">
              <Link to='/'> {Home}
                  <button className='btn bg-main form-control text-white me-2'>Not Read</button>
                </Link>
                <Link to='/add-comment'> {/* Link to the add-comment page */}
                  <button className='btn bg-main form-control text-white me-2'>Reading</button>
                </Link>
                <Link to='/add-comment'> {/* Link to the add-comment page */}
                  <button className='btn bg-main form-control text-white'>Readed</button>
                </Link>
      </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}