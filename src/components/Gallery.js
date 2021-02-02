import React from 'react';

//Import Components
import Photo from './Photo';
import NotFound from './NotFound';

const Gallery = ({ data }) => {

    const results = data;
    let photos;
    if (results.length > 0) {
        photos = results.map(photo => <Photo url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`} key={photo.id} />);
        return (
            <div className="photo-container">
                <h3>Results</h3>
                <ul>
                    { photos }
                </ul>
            </div>
        );
    } else {
        return (
            <div className="photo-container">
                <ul>
                    <NotFound />
                </ul>
            </div>
        );
    };
};

export default Gallery;