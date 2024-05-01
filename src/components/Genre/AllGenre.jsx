import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function AllGenre() {
    const [genre, setGenre] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getGenres() {
        setLoading(true);
        try {
            const response = await axios.get(`https://bookify-new.onrender.com/api/v1/genre`);
            console.log('Response data:', response.data);
            if (response.data && response.data.genre && response.data.genre.length > 0) {
                setGenre(response.data.genre[0]); // Get the first genre from the array
            } else {
                console.error('Genres array is empty or undefined');
            }
        } catch (error) {
            console.error('Error fetching genres:', error);
        } finally {
            setLoading(false);
        }
    }
    
    useEffect(() => {
        getGenres();
    }, []);

    return (
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-md-4'>
                    <h1 className='my-3'>Featured Genres</h1>
                    <div className='books p-3'>
                        {loading ? (
                            <h1 className='text-center my-2'>Loading...</h1>
                        ) : (
                            genre && <img src={genre.image} className='w-100' alt='' />
                        )}
                    </div>
                </div>
                <div className='col-md-8'>
                    {loading ? (
                        <h1 className='text-center my-2'>Loading...</h1>
                    ) : (
                        genre && (
                            <div>
                                <p>{genre.name}</p>
                                <p>{genre.slug}</p>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
