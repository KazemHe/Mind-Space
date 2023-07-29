import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Thesis.css';
import ThesisContent from './ThesisContent';

export default function Thesis() {
  return (
    <div className='Thesis-container'>
      <div className='Thesis-content'>
        <p className='first-title'>עבודת תיזה במסגרת הקורס לכתיבת תיזה פרויקט גמר</p>
      </div>
      <div className='Thesis-content'>
        <h1 className='main-title'>Mindspace : ידיו הוירטואליות של האדריכל</h1>
      </div>
      <div className='Thesis-content'>
        <p className='sec-title'>מרצים: ד"ר יואב שיבר, ד"ר דקלה יזהר וד"ר רועי קוזלובסקי</p>
        <p className='sec-title-tashap'>
          תשפ"ג 2022-2023
        </p>
      </div>
      <div className='Thesis-buttons'>
        <button className='Thesis-button'>
          <Link to='/thesis/content' className='link-button' >
            הבא
          </Link>
        </button>

        <button className='Thesis-button'>

          <Link to='/' className='link-button' >
            חזרה
          </Link>
        </button>
      </div>
    </div>
  );
}
