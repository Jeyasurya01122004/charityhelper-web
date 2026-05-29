import React from 'react'
import './Aboutpart.css';

export default function Aboutpart({headpara,content}) {
  return (
    <div className='part'>
        <h1>{headpara}</h1>
        <p>{content}</p>
    </div>
  )
}
 