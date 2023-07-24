import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Thesis.css';

export default function Thesis() {
  return (
    <div className=''>
      <div>
        <p>עבודת תיזה במסגרת הקורס לכתיבת תיזה פרויקט גמר</p>
      </div>
      <div>
        <h2>Mindspace : ידיו הוירטואליות של האדריכל</h2>
      </div>
      <div>
        <p>מרצים: ד"ר יואב שיבר, ד"ר דקלה יזהר וד"ר רועי קוזלובסקי</p>
        תשפ"ג 2022-2023
      </div>
      <div className='Thesis-buttons'>
        <Link to='/thesis/page/1' className='Thesis-button'>
          Next
        </Link>
        <button className='Thesis-button' onClick={() => window.history.back()}>
          Back
        </button>
      </div>
    </div>
  );
}
