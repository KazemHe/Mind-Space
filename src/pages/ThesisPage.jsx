import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getThesisPage } from '../service/thesis.service';
import '../style/ThesisPage.css'

export default function ThesisPage() {
  const { pageNumber } = useParams();
  const [currentPageNumber, setCurrentPageNumber] = useState(parseInt(pageNumber));
  const url = getThesisPage(currentPageNumber);

  const divStyle = {
    marginTop : '2%',
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom center',
    width: '100%',
    minHeight: '90vh',
  };

  const handlePreviousPage = () => {
    setCurrentPageNumber((prevPageNumber) => Math.max(0, prevPageNumber - 1));
  };

  const handleNextPage = () => {
    setCurrentPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  // Whenever the pageNumber changes, update the URL
  // useEffect(() => {
  //   // Update the URL with the new page number
  //   window.history.replaceState(null,null,`/thesis/page/${currentPageNumber}`);
  // }, [currentPageNumber]);

  return (
    <div className='ThesisPage' style={divStyle}>
        <div className='thesis-nav'>

      {currentPageNumber < 67 && <Link to={`/thesis/page/${currentPageNumber + 1}`}><i className="fa-solid fa-chevron-left" onClick={handleNextPage}></i></Link>}
     {currentPageNumber > 0 && <span> {currentPageNumber}</span>} 
     <Link to={`/thesis/page/${currentPageNumber - 1}`}><i className="fa-solid fa-chevron-right" onClick={handlePreviousPage}></i></Link> 
        </div>
    </div>
  );
}


