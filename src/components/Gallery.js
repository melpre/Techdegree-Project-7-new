import React from 'react';

//Import Components
import Photo from './Photo';

const Gallery = (props) => {

    const results = props.data;

    let photos = results.map(photo => 
        <Photo url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} />
    );

    return (
        <div className="photo-container">
        <h2>Results</h2>
        <ul>
            {photos}
        </ul>
      </div>
    );
};

export default Gallery;