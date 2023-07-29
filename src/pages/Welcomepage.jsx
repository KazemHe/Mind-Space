import React, { useState } from 'react';
import '../style/Welcomepage.css';
import Mindfulness from '../images/Mindfulness.jpg';
import Rebirthing from '../images/Rebirthing.jpg';
import Sensations from '../images/Sensations.jpg';
import { Link } from 'react-router-dom';


const Welcomepage = () => {
  const [activeColumn, setActiveColumn] = useState(null);

  const handleColumnClick = (columnIndex) => {
    if (activeColumn === columnIndex) {
      setActiveColumn(null);
    } else {
      setActiveColumn(columnIndex);
    }
  };




  return (
    <div className="welcome" dir='rtl'>
      <div
        className={`column ${activeColumn === 1 ? 'active' : ''}`}
        onClick={() => handleColumnClick(1)}
      >
        <div className="column-content" style={{ backgroundImage: `url(${Sensations})` }}>
          <h1>חושים</h1>
          {activeColumn === 1 && (
            <>
              <p>טיפול בתחושות הוא גישה טיפולית המתמקדת בגירוי החושים כדי לקדם רגיעה, הפחתת מתח ורווחה כללית. זה כולל שימוש בחוויות חושיות שונות, כגון מגע, צליל, ריח וראייה, כדי ליצור סביבה מרגיעה וסוחפת עבור אנשים. טיפול בתחושות יכול לעזור לשפר את המודעות העצמית, לשפר את מצב הרוח ולספק גירוי חושי לאנשים עם הפרעות או חרדה.</p>

              <Link className='link' to="/Building/Sensations"><button>הבא</button></Link>
            </>
          )}
        </div>
      </div>
      <div
        className={`column ${activeColumn === 2 ? 'active' : ''}`}
        onClick={() => handleColumnClick(2)}
      >
        <div className="column-content" style={{ backgroundImage: `url(${Rebirthing})` }}>
          <h1>נשימה</h1>
          {activeColumn === 2 && (
            <>
              <p>נשימה מעגלית (באנגלית: Rebirthing) היא שיטת טיפול המבוססת על תרגול נשימה שמטרתה היא טיפול בבעיות רגשיות, שחרור מתחים, שינוי דפוסי התנהגות וכדומה. השיטה מתבססת על ההנחה שבעיות רגשיות רבות נובעות מזיכרונות מודחקים מתקופת הלידה והילדות המוקדמת.</p>
              <Link className='link' to="/Building/Rebirthing"><button>הבא</button></Link>
            </>
          )}
        </div>
      </div>
      <div
        className={`column ${activeColumn === 3 ? 'active' : ''}`}
        onClick={() => handleColumnClick(3)}
      >
        <div className="column-content" style={{ backgroundImage: `url(${Mindfulness})` }}>
          <h1>קשיבות</h1>
          {activeColumn === 3 && (
            <>
              <p>הפחתת מתח מבוססת
                מיינדפולנס (Mindfulness).  זו גישה טיפולית המשלבת מדיטציה ותרגולי מיינדפולנס כדי לעזור למתמודדים עם מתח, לקדם רווחה ולהגביר את המודעות העצמית.
                זוהי שיטת תרגול מדיטטיבי הכרוכה בהפניית הקשב באופן מכוון ובלתי שיפוטי לחוויות ותופעות המתרחשות ברגע.
              </p>
              <Link className='link' to="/Building/Mindfulness"><button>הבא</button></Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcomepage;
