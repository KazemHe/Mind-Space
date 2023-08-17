import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getThesisPage } from '../service/thesis.service';
import '../style/ThesisPage.css';

export default function ThesisPage() {
  const { pageNumber } = useParams();
  const [currentPageNumber, setCurrentPageNumber] = useState(parseInt(pageNumber));
  const url = getThesisPage(currentPageNumber);

  // Preload the next image when currentPageNumber changes
  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = getThesisPage(currentPageNumber + 1); // Preload next image
    // You can preload previous image as well if needed
  }, [currentPageNumber]);

  const handlePreviousPage = () => {
    setCurrentPageNumber((prevPageNumber) => Math.max(0, prevPageNumber - 1));
  };

  const handleNextPage = () => {
    setCurrentPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  return (
    <div className='ThesisPage' style={{ /* Add your styles here */ }}>
      <img src={url} className='thesis-img' alt={`Page ${currentPageNumber}`} />
      <div className='thesis-nav'>
        {currentPageNumber < 67 && (
          <Link className='tesis-pages-link' to={`/thesis/page/${currentPageNumber + 1}`}>
            <i className="fa-solid fa-chevron-left" onClick={handleNextPage}></i>
          </Link>
        )}
        {currentPageNumber > 0 && <span> {currentPageNumber}</span>}
        {currentPageNumber > 0 && (
          <Link className='tesis-pages-link' to={`/thesis/page/${currentPageNumber - 1}`}>
            <i className="fa-solid fa-chevron-right" onClick={handlePreviousPage}></i>
          </Link>
        )}
        {currentPageNumber < 1 && (
          <Link className='tesis-pages-link' to='/thesis/content'>
            <i className="fa-solid fa-chevron-right" onClick={handlePreviousPage}></i>
          </Link>
        )}
      </div>
    </div>
  );
}
