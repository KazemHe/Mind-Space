import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Thesis.css';
import ThesisContent from './ThesisContent';

export default function Thesis() {
  return (
    <div className='Thesis-container'>
      <div className='Thesis-content'>
        <p>עבודת תיזה במסגרת הקורס לכתיבת תיזה פרויקט גמר</p>
      </div>
      <div className='Thesis-content'>
        <h1>Mindspace : ידיו הוירטואליות של האדריכל</h1>
      </div>
      <div className='Thesis-content'>
        <p>מרצים: ד"ר יואב שיבר, ד"ר דקלה יזהר וד"ר רועי קוזלובסקי</p>
        תשפ"ג 2022-2023
      </div>
      <div className='Thesis-buttons'>
        <Link to='/thesis/content' className='Thesis-button'>
          הבא
        </Link>
        <button className='Thesis-button' onClick={() => window.history.back()}>
          חזרה
        </button>
      </div>
    </div>
  );
}
