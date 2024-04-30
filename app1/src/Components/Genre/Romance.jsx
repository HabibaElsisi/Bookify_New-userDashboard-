import axios from 'axios';
import React, { useState, useEffect } from 'react'; // Combine imports
// import { Link } from 'react-router-dom';
// import Home from './Home/Home';

export default function Romance() { // Renamed the function to start with a capital letter
  let [genre, setGenre] = useState([]);
  let [loading, setLoading] = useState(false);

  async function getGenre() {
    setLoading(true);
    try {
      const response = await axios.get(`https://bookify-new.onrender.com/api/v1/genre/65ece373e9624bf82211fd29`);
      console.log('Response data:', response.data);
      setBook(response.data.genre);
    } catch (error) {
      console.error('Error fetching genre:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getGenre();
  }, []);


  return (
    <div>ROMANCE</div>
  )
}
