import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../style/ThesisContent.css';

export default function ThesisContent() {
  return (
    <div className='table-of-contents' dir='rtl'>
      <div className='thesis-content'>
        <Link to='/thesis/page/1'><h5>אבסטרקט...........................1</h5></Link>
        <Link to='/thesis/page/2'><h5>פרק 1 : מבוא ורקע</h5></Link>
        <Link to='/thesis/page/3'><p>1.1 הבנת משבר בריאות הנפש והפוטנציאל של מציאות מדומה</p></Link>
        <Link to='/thesis/page/4'><p>1.2 מתודולוגיה: יצירת מסע לשינוי פרדיגמה</p></Link>
        <Link to='/thesis/page/5'><p>1.3 תחום ומגבלות</p></Link>
        <Link to='/thesis/page/6'><p>1.4 שאלות המחקר</p></Link>
        <Link to='/thesis/page/7'><h5>פרק 2 : סקירת ספרות</h5></Link>
        <Link to='/thesis/page/8'><p>2.1 אתגרי בריאות הנפש: חקר עומק המשבר</p></Link>
        <Link to='/thesis/page/9'><p>2.2 גישות טיפוליות: למידה מהמסורת ומההווה</p></Link>
        <Link to='/thesis/page/10'><p>2.3 אסטרטגיות לניהול עצמי עם הפרעות נפשיות</p></Link>
        <Link to='/thesis/page/11'><p>2.4 אלכימיה אדריכלית: האיחוד בין עיצוב לרווחת הנפש</p></Link>
        <Link to='/thesis/page/12'><p>2.5 כניסה לתחום הוירטואלי: הכוח הטרנספורמטיבי של טיפול בVR</p></Link>
        <Link to='/thesis/page/13'><h5>פרק 3: יסודות תיאורטיים</h5></Link>
        <Link to='/thesis/page/14'><p>3.1 אודיסאה אתית: ניווט בשטח המוסרי של מרחבים טיפוליים וירטואליים</p></Link>
        <Link to='/thesis/page/15'><p>3.2 עיצוב העתיד: עיצוב מסתגל למסעות הנפש</p></Link>
        <Link to='/thesis/page/16'><p>3.3 חיבוק הטבע: האפקט המרפא של עיצוב ביופילי</p></Link>
        <Link to='/thesis/page/17'><p>3.4 עיצוב להכלה: קידום נגישות ושוויון במרחבים טיפוליים וירטואליים</p></Link>
        <Link to='/thesis/page/18'><p>3.5 לעמוד על כתפי נפילים: השראות אדריכליות</p></Link>
      </div>
      <div className='thesis-content'>
        <Link to='/thesis/page/19'><h5>פרק 4: מתודולוגיית עיצוב</h5></Link>
        <Link to='/thesis/page/20'><p>4.1 פרויקט "מיינדספייס"</p></Link>
        <Link to='/thesis/page/21'><p>4.2 שיקולי עיצוב ממשק משתמש והדרכה למסע</p></Link>
        <Link to='/thesis/page/22'><p>4.3 קשיבות: יצירת שלווה במרכז המיינדפולנס</p></Link>
        <Link to='/thesis/page/23'><p>4.4 נשימה: מסע השינוי האישי במרכז הריברסינג</p></Link>
        <Link to='/thesis/page/24'><p>4.5 תחושה: קידום הרפיה ומודעות עצמית במרכז לטיפול חושי</p></Link>
        <Link to='/thesis/page/25'><h5>פרק 5: מסקנות וכיוונים עתידיים</h5></Link>
        <Link to='/thesis/page/26'><p>5.1 הממצאים העיקריים וניתוחם</p></Link>
        <Link to='/thesis/page/27'><p>5.2 השלכות על עיצוב ופרקטיקה</p></Link>
        <Link to='/thesis/page/28'><p>5.3 כיווני מחקר עתידיים</p></Link>
        <Link to='/thesis/page/29'><p>5.4 מסקנות</p></Link>
        <Link to='/thesis/page/30'><h5>סיכום ואחרית דבר</h5></Link>
        <Link to='/thesis/page/31'><h5>רשימת תמונות</h5></Link>
        <Link to='/thesis/page/32'><h5>תמונות</h5></Link>
        <Link to='/thesis/page/33'><h5>נספחים</h5></Link>
        <Link to='/thesis/page/34'><h5>ביבליוגרפיה</h5></Link>
      </div>
    </div>
  );
}
