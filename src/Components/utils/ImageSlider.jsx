import React, { useState } from 'react';
import '../../styles/imageSlider.css';
import { useParams } from 'react-router-dom';
import { useGetSingleProductQuery } from '../../app/services/dummyData';

const product = {
    title: "Essence Mascara Lash Princess",
    images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/2.png",
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/3.png"
    ],
    thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
};

const ImageSlider = () => {

    const { id } = useParams()
  const { data, isLoading } = useGetSingleProductQuery(id)

  if (isLoading) {
    return <div style={{
        width: 'fitContent',
        margin: '2rem auto',
    }}>Loading...</div>
  }

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.images.length);
    };

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + data.images.length) % data.images.length);
    };

  

    return (
        <div className="image-slider">
            <div className="main-image-container">
                <button className="prev-button" onClick={handlePrevClick}>&#10094;</button>

                <img
                    src={data.images[currentImageIndex]}
                    alt={`${data.title} ${currentImageIndex + 1}`}
                    className="main-image"
                />
                <button className="next-button" onClick={handleNextClick}>&#10095;</button>
            </div>

            <div className="thumbnails">
                {data.images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`${data.title} ${index + 1}`}
                        className={currentImageIndex === index ? 'active' : ''}
                        onClick={() => handleThumbnailClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
