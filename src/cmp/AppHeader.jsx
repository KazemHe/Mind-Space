import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import logo from '../images/logo.png';
import Mindspace from '../images/Mindspace.png';
import '../style/AppHeader.css';

const componentTextMap = {
  '/Building/Mindfulness': 'האי לקְשִׁיבוּת',
  '/Building/Rebirthing': 'האי לנְשִׁימָה',
  '/Building/Sensations': 'האי לחוּשִׁים',
  '/model/Mindfulness': 'פרוגרמת האי לקְשִׁיבוּת',
  '/model/Rebirthing': 'פרוגרמת האי לנשימה',
  '/model/Sensations': 'פרוגרמת האי לחושים',
  '/thesis/content': 'תוכן העניינים',
  '/thesis/page/1': 'אבסטרקט',
};

export default function AppHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    navigate(-1);
  };

  const componentText = componentTextMap[location.pathname] || '';

  return (
    <header className="AppHeader">
      <Link to="/" className="logoLink">
        <div className="logoContainer">
          <img className="Logo-footer" src={logo} alt="Logo" />
          <img src={Mindspace} alt="Mindspace" className="Mindspace-footer" />
        </div>
      </Link>
      <div className="headerRight">
        {componentText && <span className="componentText">{componentText}</span>}
        {!location.pathname.includes('/welcome') && (
          <button className="button-footer" onClick={handleGoBack}>
            לחזור
          </button>
        )}
      </div>
    </header>
  );
}
