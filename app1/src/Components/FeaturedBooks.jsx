import axios from 'axios'
import { useEffect } from 'react'

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedBooks() {
  let [booksArr, setBooksArr] = useState([])
  let [loading, setLoading] = useState(false)
  async function getBooks() {
    setLoading(true);
    try {
      const response = await axios.get(`https://bookify-new.onrender.com/api/v1/book`);
      console.log('Response data:', response.data); // Log response data
      setBooksArr(response.data.book);

    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getBooks()

  }, [])


  return (
    <div className='container'>
      <div className='row'>
        <h1 className='my-3'>FeaturedBooks</h1>
        {loading ? <h1 className='text-center my-2'>Loading...</h1> : booksArr.map
          ((book) => <div className='col-md-2' key={book.id}>
            <div className='books p-3 cursor-pointer'>
            <Link to={"/books/" + book.id} className='books'>
              <img src={book.imgCover} className='w-50' alt='' />
            </Link>
            <div className='col-md-8'>
            <p>{book.title.split(" ").slice("0,2").join(" ")}</p>
            <p>{book.description} </p>
            <p className='fw-bolder'>{book.author}</p>
            <Link to={"/books/" + book.id} className='books'>
            <button className='btn bg-main text-white mt-2' > Read Now</button>
            </Link>
             </div>
             </div>
            
          </div>)}
      </div>
    </div>
  )
}
