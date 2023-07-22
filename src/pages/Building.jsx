import React from 'react';
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

  return (
    <div className={`${className}`}>
      <Link to={`/model/${source}`} className="arrowButton">
        <i className="fas fa-arrow-left"></i>
        <span className="buttonText">לפרוגרמה</span>
      </Link>
    </div>
  );
}
