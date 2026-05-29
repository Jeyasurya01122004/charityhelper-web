import React from 'react';
import './hero.css';
import image1 from '../../assets/animate-img-1.jpg';
import image2 from '../../assets/animate-img-2.jpg';
import image3 from '../../assets/animate-img-3.jpg';
import image4 from '../../assets/animate-img-4.jpg';
import image5 from '../../assets/animate-img-5.jpg';
import image6 from '../../assets/animate-img-6.jpg';
import Childimg1 from '../../assets/childimg1.avif';
import Heropar from './heropara'

export default function Herosection(){
    return(
        <>

        <div className='content-img'>
            <img className="main-img" src={Childimg1} alt="img" />
                    <h1>Help The Children</h1>
                    <p>We do whatever it takes to make sure children don’t just survive but thrive. Helper believes that every child should be able to make their mark on their world and help build a better future.</p>
        </div>  
        
    <div className='heromain'>
        <div className='Heroo'>
            <div className='H-img1'> 
                <img src={image1} alt="image" />
            </div>    

            <div className='H-img2'>
                <img src={image2} alt="image" />
            </div>

            <div className="H-img3">
                <img src={image3} alt="img"/>
            </div>

            <div className="H-img4">
                <img src={image4} alt="image" />    
            </div>  

            <div className="H-img5">
                <img src={image5} alt="image" />    
            </div> 

            <div className="H-img6">
                <img src={image6} alt="img" />
            </div> 

        </div>

     


        <div className='hmain'>
            <div className='heropara'>
                <h1>Our Mission</h1>
                <p>Our organization pursues several goals that can be identified as our mission. Learn more about them below.</p>
            </div>
                <Heropar  head='saving child' para='Our main mission is to save and rescue permanently displaced children.'/>
                <Heropar  head='Peace On The Planet' para='By working with our partners, we aim to establish peaceful relationships'/>
                <Heropar  head='Care & Protection' para='We provide global care and protection to support children all over the world.'/>
        </div>
        
        
    

    </div>
    </>
    )
}