import React from 'react';
import './Footer.css';
import image from '../../assets/logo2.png';

export default function Footers(){
  return (
    <footer className='footer'>
        <div className='foot-img'>
                <img src={image} alt="img"/>
            </div>
            
            <div className='menubar'>
                <ul className='foot-ulist'>
                    <li><a href="#">Home</a></li>
                    <li> |</li>
                    <li><a href="#">About </a></li>
                    <li> |</li>
                    <li><a href="#">Charity </a></li>
                    <li> |</li>
                    <li><a href="#">Conctect</a></li>
                </ul>
            </div>    

                <div className='social-icon'>
                    <ul>
                        <li><a href="#"><i class="bi bi-facebook"></i></a></li>
                        <li><a href="#"> <i class="bi bi-whatsapp"></i>  </a></li>
                        <li><a href="#"> <i class="bi bi-twitter"></i>   </a></li>
                        <li><a href="#"> <i class="bi bi-youtube"></i> </a></li>
                        <li><a href="#"> <i class="bi bi-twitter-x"></i> </a></li>
                    </ul>
                </div>    
                <div className="foot-last">
                    <p>© 2026 Helper. All Rights Reserved. Design by Templatemonster</p>
                </div>
            
        {/* </div> */}
    </footer>
  )}

