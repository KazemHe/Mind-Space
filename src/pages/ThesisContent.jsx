import React from 'react';
import { Link } from 'react-router-dom';
import '../style/ThesisContent.css';

export default function ThesisContent({componentText }) {
  const MAX_TEXT_LENGTH = 70; // Adjust this value as needed

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
            <h4>{addDotsToText('אבסטרקט')}01</h4>
          </Link>
          <Link to='/thesis/page/2' className='custom-link'>
            <h4>פרק 1 : מבוא ורקע</h4>
          </Link>
          <Link to='/thesis/page/3' className='custom-link'>
            <p>{addDotsToText('1.1 הבנת משבר בריאות הנפש והפוטנציאל של מציאות מדומה')}02</p>
          </Link>
          <Link to='/thesis/page/6' className='custom-link'>
            <p>{addDotsToText('1.2 מתודולוגיה: יצירת מסע לשינוי פרדיגמה')}06</p>
          </Link>
          <Link to='/thesis/page/9' className='custom-link'>
            <p>{addDotsToText('1.3 תחום ומגבלות')}09</p>
          </Link>
          <Link to='/thesis/page/9' className='custom-link'>
            <p>{addDotsToText('1.4 שאלות המחקר')}09</p>
          </Link>
          <Link to='/thesis/page/10' className='custom-link'>
            <h4>פרק 2 : סקירת ספרות</h4>
          </Link>
          <Link to='/thesis/page/10' className='custom-link'>
            <p>{addDotsToText('2.1 אתגרי בריאות הנפש: חקר עומק המשבר')}10</p>
          </Link>
          <Link to='/thesis/page/12' className='custom-link'>
            <p>{addDotsToText('2.2 גישות טיפוליות: למידה מהמסורת ומההווה')}12</p>
          </Link>
          <Link to='/thesis/page/14' className='custom-link'>
            <p>{addDotsToText('2.3 אסטרטגיות לניהול עצמי עם הפרעות נפשיות')}14</p>
          </Link>
          <Link to='/thesis/page/16' className='custom-link'>
            <p>{addDotsToText('2.4 אלכימיה אדריכלית: האיחוד בין עיצוב לרווחת הנפש')}16</p>
          </Link>
          <Link to='/thesis/page/19' className='custom-link'>
            <p>{addDotsToText('2.5 VR כניסה לתחום הוירטואלי: הכוח הטרנספורמטיבי של טיפול ב ')}19</p>
          </Link>
          <Link to='/thesis/page/22' className='custom-link'>
            <h4>פרק 3: יסודות תיאורטיים</h4>
          </Link>
          <Link to='/thesis/page/22' className='custom-link'>
            <p>{addDotsToText('3.1 אודיסאה אתית: ניווט בשטח המוסרי של מרחבים טיפוליים וירטואליים')}22</p>
          </Link>
          <Link to='/thesis/page/23' className='custom-link'>
            <p>{addDotsToText('3.2 עיצוב העתיד: עיצוב מסתגל למסעות הנפש')}23</p>
          </Link>
          <Link to='/thesis/page/24' className='custom-link'>
            <p>{addDotsToText('3.3 חיבוק הטבע: האפקט המרפא של עיצוב ביופילי')}23</p>
          </Link>
          <Link to='/thesis/page/26' className='custom-link'>
            <p>{addDotsToText('3.4 עיצוב להכלה: קידום נגישות ושוויון במרחבים טיפוליים וירטואליים')}26</p>
          </Link>
          <Link to='/thesis/page/28' className='custom-link'>
            <p>{addDotsToText('3.5 לעמוד על כתפי נפילים: השראות אדריכליות')}28</p>
          </Link>
          </div>
          <div className='thesis-content'>
          <Link to='/thesis/page/36' className='custom-link'>
            <h4>פרק 4: מתודולוגיית עיצוב</h4>
          </Link>
          <Link to='/thesis/page/36' className='custom-link'>
            <p>{addDotsToText('4.1 פרויקט "מיינדספייס"')}36</p>
          </Link>
          <Link to='/thesis/page/37' className='custom-link'>
            <p>{addDotsToText('4.2 שיקולי עיצוב ממשק משתמש והדרכה למסע')}37</p>
          </Link>
          <Link to='/thesis/page/42' className='custom-link'>
            <p>{addDotsToText('4.3 קשיבות: יצירת שלווה במרכז המיינדפולנס')}42</p>
          </Link>
          <Link to='/thesis/page/44' className='custom-link'>
            <p>{addDotsToText('4.4 נשימה: מסע השינוי האישי במרכז הריברסינג')}44</p>
          </Link>
          <Link to='/thesis/page/46' className='custom-link'>
            <p>{addDotsToText('4.5 תחושה: קידום הרפיה ומודעות עצמית במרכז לטיפול חושי')}46</p>
          </Link>
          <Link to='/thesis/page/48' className='custom-link'>
            <h4>פרק 5: מסקנות וכיוונים עתידיים</h4>
          </Link>
          <Link to='/thesis/page/48' className='custom-link'>
            <p>{addDotsToText('5.1 הממצאים העיקריים וניתוחם')}48</p>
          </Link>
          <Link to='/thesis/page/49' className='custom-link'>
            <p>{addDotsToText('5.2 השלכות על עיצוב ופרקטיקה')}49</p>
          </Link>
          <Link to='/thesis/page/50' className='custom-link'>
            <p>{addDotsToText('5.3 כיווני מחקר עתידיים')}50</p>
          </Link>
          <Link to='/thesis/page/51' className='custom-link'>
            <p>{addDotsToText('5.4 מסקנות')}51</p>
          </Link>
          <Link to='/thesis/page/52' className='custom-link'>
            <h4>{addDotsToText('סיכום ואחרית דבר')}52</h4>
          </Link>
          <Link to='/thesis/page/54' className='custom-link'>
            <h4>{addDotsToText('רשימת תמונות')}54</h4>
          </Link>
          <Link to='/thesis/page/55' className='custom-link'>
            <h4>{addDotsToText('תמונות')}55</h4>
          </Link>
          <Link to='/thesis/page/60' className='custom-link'>
            <h4>{addDotsToText('נספחים')}60</h4>
          </Link>
          <Link to='/thesis/page/65' className='custom-link'>
            <h4>{addDotsToText('ביבליוגרפיה')}65</h4>
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
