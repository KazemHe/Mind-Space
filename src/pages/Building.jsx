import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../style/Building.css';

export default function Building() {
  const { source } = useParams();

  let title = '';
  let className = '';

  switch (source) {
    case 'Sensations':
      title = 'חושים';
      className = 'Sensations';
      break;
    case 'Rebirthing':
      title = 'נשימה';
      className = 'Rebirthing';
      break;
    case 'Mindfulness':
      title = 'קשיבות';
      className = 'Mindfulness';
      break;
    default:
      break;
  }

  // Array of image URLs to preload
  const imageUrls = [
    // Add the image URLs here
  ];

  useEffect(() => {
    const preloadImages = imageUrls.map((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
      return img;
    });

    return () => {
      // Clean up by removing event listeners and references to preloaded images
      preloadImages.forEach((img) => img.removeEventListener('load', onLoad));
    };
  }, [imageUrls]);

  const onLoad = (event) => {
    console.log('Image loaded:', event.target.src);
    // You can do additional handling here if needed
  };

  return (
    <div className={`${className}`}>
      <Link to={`/model/${source}`} className="arrowButton">
        <i className="fas fa-arrow-left"></i>
        <span className="buttonText">לפרוגרמה</span>
      </Link>
    </div>
  );
}
