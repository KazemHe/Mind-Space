import React from 'react';
import { Link } from 'react-router-dom';
import '../style/ThesisContent.css';

export default function ThesisContent() {
  const MAX_TEXT_LENGTH = 100; // Adjust this value as needed

  const addDotsToText = (text) => {
    if (text.length < MAX_TEXT_LENGTH) {
      const dots = '.'.repeat(MAX_TEXT_LENGTH - text.length);
      return `${text}${dots}`;
    }
    return text;
  };

  return (
    <>
      <div className='table-of-contents' dir='rtl'>
        <div className='thesis-content'>
          <Link to='/thesis/page/1' className='custom-link'>
            <h4>{addDotsToText('אבסטרקט')}</h4>
          </Link>
          <Link to='/thesis/page/2' className='custom-link'>
            <h4>{addDotsToText('פרק 1 : מבוא ורקע')}</h4>
          </Link>
          <Link to='/thesis/page/3' className='custom-link'>
            <p>{addDotsToText('1.1 הבנת משבר בריאות הנפש והפוטנציאל של מציאות מדומה')}</p>
          </Link>
          <Link to='/thesis/page/4' className='custom-link'>
            <p>{addDotsToText('1.2 מתודולוגיה: יצירת מסע לשינוי פרדיגמה')}</p>
          </Link>
          <Link to='/thesis/page/5' className='custom-link'>
            <p>{addDotsToText('1.3 תחום ומגבלות')}</p>
          </Link>
          <Link to='/thesis/page/6' className='custom-link'>
            <p>{addDotsToText('1.4 שאלות המחקר')}</p>
          </Link>
          <Link to='/thesis/page/7' className='custom-link'>
            <h4>{addDotsToText('פרק 2 : סקירת ספרות')}</h4>
          </Link>
          <Link to='/thesis/page/8' className='custom-link'>
            <p>{addDotsToText('2.1 אתגרי בריאות הנפש: חקר עומק המשבר')}</p>
          </Link>
          <Link to='/thesis/page/9' className='custom-link'>
            <p>{addDotsToText('2.2 גישות טיפוליות: למידה מהמסורת ומההווה')}</p>
          </Link>
          <Link to='/thesis/page/10' className='custom-link'>
            <p>{addDotsToText('2.3 אסטרטגיות לניהול עצמי עם הפרעות נפשיות')}</p>
          </Link>
          <Link to='/thesis/page/11' className='custom-link'>
            <p>{addDotsToText('2.4 אלכימיה אדריכלית: האיחוד בין עיצוב לרווחת הנפש')}</p>
          </Link>
          <Link to='/thesis/page/12' className='custom-link'>
            <p>{addDotsToText('2.5 כניסה לתחום הוירטואלי: הכוח הטרנספורמטיבי של טיפול בVR')}</p>
          </Link>
          <Link to='/thesis/page/13' className='custom-link'>
            <h4>{addDotsToText('פרק 3: יסודות תיאורטיים')}</h4>
          </Link>
          <Link to='/thesis/page/14' className='custom-link'>
            <p>{addDotsToText('3.1 אודיסאה אתית: ניווט בשטח המוסרי של מרחבים טיפוליים וירטואליים')}</p>
          </Link>
          <Link to='/thesis/page/15' className='custom-link'>
            <p>{addDotsToText('3.2 עיצוב העתיד: עיצוב מסתגל למסעות הנפש')}</p>
          </Link>
          <Link to='/thesis/page/16' className='custom-link'>
            <p>{addDotsToText('3.3 חיבוק הטבע: האפקט המרפא של עיצוב ביופילי')}</p>
          </Link>
          <Link to='/thesis/page/17' className='custom-link'>
            <p>{addDotsToText('3.4 עיצוב להכלה: קידום נגישות ושוויון במרחבים טיפוליים וירטואליים')}</p>
          </Link>
          <Link to='/thesis/page/18' className='custom-link'>
            <p>{addDotsToText('3.5 לעמוד על כתפי נפילים: השראות אדריכליות')}</p>
          </Link>
          <Link to='/thesis/page/19' className='custom-link'>
            <h4>{addDotsToText('פרק 4: מתודולוגיית עיצוב')}</h4>
          </Link>
          <Link to='/thesis/page/20' className='custom-link'>
            <p>{addDotsToText('4.1 פרויקט "מיינדספייס"')}</p>
          </Link>
          <Link to='/thesis/page/21' className='custom-link'>
            <p>{addDotsToText('4.2 שיקולי עיצוב ממשק משתמש והדרכה למסע')}</p>
          </Link>
          <Link to='/thesis/page/22' className='custom-link'>
            <p>{addDotsToText('4.3 קשיבות: יצירת שלווה במרכז המיינדפולנס')}</p>
          </Link>
          <Link to='/thesis/page/23' className='custom-link'>
            <p>{addDotsToText('4.4 נשימה: מסע השינוי האישי במרכז הריברסינג')}</p>
          </Link>
          <Link to='/thesis/page/24' className='custom-link'>
            <p>{addDotsToText('4.5 תחושה: קידום הרפיה ומודעות עצמית במרכז לטיפול חושי')}</p>
          </Link>
          <Link to='/thesis/page/25' className='custom-link'>
            <h4>{addDotsToText('פרק 5: מסקנות וכיוונים עתידיים')}</h4>
          </Link>
          <Link to='/thesis/page/26' className='custom-link'>
            <p>{addDotsToText('5.1 הממצאים העיקריים וניתוחם')}</p>
          </Link>
          <Link to='/thesis/page/27' className='custom-link'>
            <p>{addDotsToText('5.2 השלכות על עיצוב ופרקטיקה')}</p>
          </Link>
          <Link to='/thesis/page/28' className='custom-link'>
            <p>{addDotsToText('5.3 כיווני מחקר עתידיים')}</p>
          </Link>
          <Link to='/thesis/page/29' className='custom-link'>
            <p>{addDotsToText('5.4 מסקנות')}</p>
          </Link>
          <Link to='/thesis/page/30' className='custom-link'>
            <h4>{addDotsToText('סיכום ואחרית דבר')}</h4>
          </Link>
          <Link to='/thesis/page/31' className='custom-link'>
            <h4>{addDotsToText('רשימת תמונות')}</h4>
          </Link>
          <Link to='/thesis/page/32' className='custom-link'>
            <h4>{addDotsToText('תמונות')}</h4>
          </Link>
          <Link to='/thesis/page/33' className='custom-link'>
            <h4>{addDotsToText('נספחים')}</h4>
          </Link>
          <Link to='/thesis/page/34' className='custom-link'>
            <h4>{addDotsToText('ביבליוגרפיה')}</h4>
          </Link>
        </div>
      </div>
      <div className='navigation-buttons'>
        <Link to='/thesis/page/0' className='custom-link'>
          הבא
        </Link>
        <Link className='custom-link'>
          חזרה
        </Link>
      </div>
    </>
  );
}
