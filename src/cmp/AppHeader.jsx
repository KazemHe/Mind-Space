import React, { useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import logo from '../images/logo.png';
import Mindspace from '../images/Mindspace.png';
import TAULOGO from '../images/TAULOGO.png'
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
  '/thesis/page/2': 'פרק 1 : מבוא ורקע',
  '/thesis/page/3': 'פרק 1 : 1.1 הבנת משבר בריאות הנפש והפוטנציאל של מציאות מדומה',
  '/thesis/page/4': 'פרק 1 : 1.1 הבנת משבר בריאות הנפש והפוטנציאל של מציאות מדומה',
  '/thesis/page/5': 'פרק 1 : 1.1 הבנת משבר בריאות הנפש והפוטנציאל של מציאות מדומה',
  '/thesis/page/6': 'פרק 1 : 1.2 מתודולוגיה: יצירת מסע לשינוי פרדיגמה',
  '/thesis/page/7': 'פרק 1 : 1.2 מתודולוגיה: יצירת מסע לשינוי פרדיגמה',
  '/thesis/page/8': 'פרק 1 : 1.2 מתודולוגיה: יצירת מסע לשינוי פרדיגמה',
  '/thesis/page/9': 'פרק 1 : 1.3 תחום ומגבלות 1.4 שאלות מחקר',
  '/thesis/page/10': 'פרק 2 : סקירת ספרות',
  '/thesis/page/11': 'פרק 2 : 2.1 חקר העומק של אתגרי בריאות הנפש',
  '/thesis/page/12': ' פרק 2 : 2.2 גישות טיפוליות: למידה מהמסורת ומההווה ',
  '/thesis/page/13': ' פרק 2 : 2.2 גישות טיפוליות: למידה מהמסורת ומההווה ',
  '/thesis/page/14': ' פרק 2 : 2.3 אסטרטגיות לניהול עצמי עם הפרעות נפשיות ',
  '/thesis/page/15': ' פרק 2 : 2.3 אסטרטגיות לניהול עצמי עם הפרעות נפשיות ',
  '/thesis/page/16': 'פרק 2 : 2.4 אלכימיה אדריכלית: האיחוד בין עיצוב לרווחת הנפש',
  '/thesis/page/17': 'פרק 2 : 2.4 אלכימיה אדריכלית: האיחוד בין עיצוב לרווחת הנפש',
  '/thesis/page/18': 'פרק 2 : 2.4 אלכימיה אדריכלית: האיחוד בין עיצוב לרווחת הנפש',
  '/thesis/page/19': ' פרק 2 : 2.5 הכוח הטרנספורמטיבי של טיפול במציאות מדומה',
  '/thesis/page/20': ' פרק 2 : 2.5 הכוח הטרנספורמטיבי של טיפול במציאות מדומה',
  '/thesis/page/21': ' פרק 2 : 2.5 הכוח הטרנספורמטיבי של טיפול במציאות מדומה',
  '/thesis/page/22': ' פרק 3 : יסודות תיאורטיים',
  '/thesis/page/23': ' פרק 3 : 3.2 עיצוב העתיד: עיצוב מסתגל למסעות הנפש',
  '/thesis/page/24': 'פרק 3 : 3.3 חיבוק הטבע: האפקט המרפא של עיצוב ביופילי',
  '/thesis/page/25': 'פרק 3 : 3.3 חיבוק הטבע: האפקט המרפא של עיצוב ביופילי',
  '/thesis/page/26': 'פרק 3 : 3.4 קידום נגישות ושוויון במרחבים טיפוליים וירטואליים',
  '/thesis/page/27': 'פרק 3 : 3.4 קידום נגישות ושוויון במרחבים טיפוליים וירטואליים',
  '/thesis/page/28': 'פרק 3 : 3.5 לעמוד על כתפי נפילים: השראות אדריכליות',
  '/thesis/page/29': 'פרק 3 : 3.5 לעמוד על כתפי נפילים: השראות אדריכליות',
  '/thesis/page/30': 'פרק 3 : 3.5 לעמוד על כתפי נפילים: השראות אדריכליות',
  '/thesis/page/31': 'פרק 3 : 3.5 לעמוד על כתפי נפילים: השראות אדריכליות',
  '/thesis/page/32': 'פרק 3 : 3.5 לעמוד על כתפי נפילים: השראות אדריכליות',
  '/thesis/page/33': 'פרק 3 : 3.5 לעמוד על כתפי נפילים: השראות אדריכליות',
  '/thesis/page/34': 'פרק 3 : 3.5 לעמוד על כתפי נפילים: השראות אדריכליות',
  '/thesis/page/35': 'פרק 3 : 3.5 לעמוד על כתפי נפילים: השראות אדריכליות',
  '/thesis/page/36': 'פרק 4 : מתודולוגיית תכנון ועיצוב',
  '/thesis/page/37': 'פרק 4 : 4.2 שיקולי עיצוב ממשק משתמש והדרכה למסע',
  '/thesis/page/38': 'פרק 4 : 4.2 שיקולי עיצוב ממשק משתמש והדרכה למסע',
  '/thesis/page/39': 'פרק 4 : 4.2 שיקולי עיצוב ממשק משתמש והדרכה למסע',
  '/thesis/page/40': 'פרק 4 : 4.2 שיקולי עיצוב ממשק משתמש והדרכה למסע',
  '/thesis/page/41': 'פרק 4 : 4.2 שיקולי עיצוב ממשק משתמש והדרכה למסע',
  '/thesis/page/42': ' פרק 4 : 4.3 המפלט השקט: יצירת שלווה במרכז המיינדפולנס',
  '/thesis/page/43': ' פרק 4 : 4.3 המפלט השקט: יצירת שלווה במרכז המיינדפולנס',
  '/thesis/page/44': 'פרק 4 : 4.4 מסע השינוי האישי במרכז הריברסינג',
  '/thesis/page/45': 'פרק 4 : 4.4 מסע השינוי האישי במרכז הריברסינג',
  '/thesis/page/46': 'פרק 4 : 4.5 קידום הרפיה והתבוננות פנימית במרכז לטיפול חושי',
  '/thesis/page/47': 'פרק 4 : 4.5 קידום הרפיה והתבוננות פנימית במרכז לטיפול חושי',
  '/thesis/page/48': 'פרק 5 : מסקנות וכיוונים עתידיים',
  '/thesis/page/49': 'פרק 5 : 5.2 השלכות על עיצוב ופרקטיקה ',
  '/thesis/page/50': 'פרק 5 : 5.3 כיווני מחקר עתידיים',
  '/thesis/page/51': 'פרק 5 : 5.4 מסקנות',
  '/thesis/page/52': 'סיכום ואחרית דבר',
  '/thesis/page/53': 'סיכום ואחרית דבר',
  '/thesis/page/54': 'רשימת תמונות',
  '/thesis/page/55': 'תמונות',
  '/thesis/page/56': 'תמונות',
  '/thesis/page/57': 'תמונות',
  '/thesis/page/58': 'תמונות',
  '/thesis/page/59': 'תמונות',
  '/thesis/page/60': 'נספחים',
  '/thesis/page/61': 'נספחים',
  '/thesis/page/62': 'נספחים',
  '/thesis/page/63': 'נספחים',
  '/thesis/page/64': 'נספחים',
  '/thesis/page/65': 'ביבליוגרפיה ',
  '/thesis/page/66': 'ביבליוגרפיה ',
  '/thesis/page/67': 'ביבליוגרפיה ',
}

export default function AppHeader() {
  const navigate = useNavigate();
  const location = useLocation();



  useEffect(() => {
    // This effect runs whenever the location (pathname) changes.
    const componentText = componentTextMap[location.pathname] || '';
    // You can do any additional logic or actions here based on the componentText if needed.
    console.log('Component Text:', componentText);
  }, [location.pathname]); // Run the effect whenever location.pathname changes.

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
        {!location.pathname.includes('/welcome') && !location.pathname.includes('/thesis') && (
          <button className="button-footer" onClick={handleGoBack}>
            לחזור
          </button>
        )}
        <Link to="/thesis" className="logoLink">
          {location.pathname.includes('/thesis') && (
            <img className="Logo-tau" src={TAULOGO} alt="Logo" />
          )}
        </Link>
      </div>
    </header>
  );
}
