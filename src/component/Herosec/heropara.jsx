import React from 'react';
import './heropara.css'

export default function Heropar({head,para,icon}) {
  return (
    <>
        <div className='HHH'>
            <i class="bi bi-emoji-smile"></i>
            <div className='phero'>
                <h1>{head}</h1>
                <p>{para}</p>
            </div>
        </div>  
    </>
  )

}
