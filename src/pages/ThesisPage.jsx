import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getThesisPage } from '../service/thesis.service';
import '../style/ThesisPage.css'

export default function ThesisPage() {
  const { pageNumber } = useParams();
  const [currentPageNumber, setCurrentPageNumber] = useState(parseInt(pageNumber));
  const url = getThesisPage(currentPageNumber);

  const divStyle = {
    marginTop : '20px',
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom center',
    width: '100%',
    minHeight: '83vh',
  };

  const handlePreviousPage = () => {
    setCurrentPageNumber((prevPageNumber) => Math.max(0, prevPageNumber - 1));
  };

  const handleNextPage = () => {
    setCurrentPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  // Whenever the pageNumber changes, update the URL
  useEffect(() => {
    // Update the URL with the new page number
    window.history.replaceState(null, null, `/thesis/page/${currentPageNumber}`);
  }, [currentPageNumber]);

  return (
    <div className='ThesisPage' style={divStyle}>
        <div className='thesis-nav'>

      {currentPageNumber < 68 && <i class="fa-solid fa-chevron-left" onClick={handleNextPage}></i>}
     {currentPageNumber > 0 && <span> {currentPageNumber}</span>} 
      <i class="fa-solid fa-chevron-right" onClick={handlePreviousPage}></i>
        </div>
    </div>
  );
}


