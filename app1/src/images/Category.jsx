import React from 'react';
import image1 from '../assets/images/genre-1.png';
import image2 from '../assets/images/genre-2.png';
import image3 from '../assets/images/genre-3.png';
import image4 from '../assets/images/genre-4.png';
import image5 from '../assets/images/genre-5.png';
import image6 from '../assets/images/genre-6.png';
import image7 from '../assets/images/genre-7.png';
import image8 from '../assets/images/genre-8.png';
import image9 from '../assets/images/genre-9.png';
import image10 from '../assets/images/genre-10.png';
import image11 from '../assets/images/genre-11.png';
import image12 from '../assets/images/genre-12.png';






import { Link } from 'react-router-dom';


// Import other images here

const Category = () => {
  // Define an array of objects containing image paths and genre names
  const genres = [
    { image: image1, name: 'ROMANCE' },
    { image: image2, name: 'ACTION' },
    { image: image3, name: 'ADVENTURE' },
    { image: image3, name: 'ADVENTURE' },
    
    // Add other genres here
  ];

  return (
    <div className="container">
      <div className="block-header text-center">
        <h2 className="block-title">Browse genres</h2>
        <Link to="/AllGenre">(view all)</Link>
      </div>
      <div className="row justify-content-center">
        {/* Map over the genres array to generate genre components */}
        {genres.map((genre, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12 p-2">
            <div className="photos">
              <a href={`/search-book?field_genre%5B${index}%5D=${index}`}>
                <img loading="lazy" src={genre.image} width="250" alt="" className="img-responsive" />
              </a>
              <div className="overlay-text">
                <p className="text-on-image">{genre.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
