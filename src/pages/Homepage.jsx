import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Homepage.css';
import logo from '../images/logo.png';
import Mindspace from '../images/Mindspace.png';
import TAULOGO from '../images/TAULOGO.png';

const Homepage = () => {
  return (
    <>
      <div className="container">
        <img src={logo} alt="Logo" className="logo" />
        <img src={Mindspace} alt="Logo" className="Mindspace" />
        <h3>פלטפורמת בריאות הוליסטית וירטואלית לחוויית ריפוי וטרנספורמציה</h3>
        <Link to="/welcome">
          <button className="button">Start</button>
        </Link>
        <div className="language-options">
          <button className="language-option">عربي</button>
          <button className="language-option">עברית</button>
          <button className="language-option">English</button>
        </div>
        <img src={TAULOGO} alt="Logo" className="TAULOGO" />
        <Link to="/thesis">
          <button className="thesis-button">לתזה</button>
        </Link>
      </div>
    </>
  );
};

export default Homepage;
