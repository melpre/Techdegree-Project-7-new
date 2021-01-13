import React from 'react';

const Photo = (props) => {
    return (
        /* Iterate over data fetched from Flickr API then render each element below */
        <li>   
            <img src={props.url} alt="" />
        </li>
    );
};

export default Photo;