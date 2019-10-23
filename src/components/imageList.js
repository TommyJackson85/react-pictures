import './imageList.css';
import React from 'react';
import ImageCard from './imageCard';
const ImageList = (props) => {
    //key reference removes warning from console and
    //increases performance
    //description, id, urls are referencing values from found object
    const images = props.images.map(image => {
        return <ImageCard key={image.id} image={image} />;
    });
    return <div className="image-list">{ images }</div>;
};

export default ImageList;