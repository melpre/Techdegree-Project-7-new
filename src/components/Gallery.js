import React from 'react';

//Import Components
import Photo from './Photo';

const Gallery = () => {
    return (
        <div className="photo-container">
        <h2>Results</h2>
        <ul>
            <Photo />
        </ul>
      </div>
    );
};

export default Gallery;