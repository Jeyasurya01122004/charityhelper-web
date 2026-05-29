import React from 'react'
import './Header.css';
import Logopro from '../../assets/logo2.png';
import Donatebtn from '../buttons/Donatebtn';
import {Link} from 'react-router-dom'

export default function Head(){
  return (
        <section className='sec'>
              <div className="header">
                <div className='logo'>
                    <Link href='#'><img src={Logopro} alt='logo'></img></Link>
                        <div className="toggle">
                             <i class="bi bi-list"> </i>
                        </div>
                </div>
                
                    <div className="menu">
                          <ul>
                            <li><Link to={'/'}>HOME</Link></li>
                            <li><Link to={'/about'}>ABOUT</Link></li>
                            <li><Link to={'/charity'}>CHARITY</Link></li>
                            <li><Link to={'/contact'}>CONCTACT US</Link></li>
                          </ul>
                    </div>

                      <div className='donatebtn'>
                        <Donatebtn  btn="Donate"/>
                      </div>
                  </div> 

</section>
  )
};

