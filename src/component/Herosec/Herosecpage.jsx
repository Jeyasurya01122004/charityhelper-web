import React from "react";
import './Herosecpage.css';
import image1 from '../../assets/heroimg.jpg';
import image2 from '../../assets/heroimg2.jpg';
import image3 from '../../assets/heroimg3.jpg';
import Donatebtn from '../buttons/Donatebtn';
import image from '../../assets/back-img.jpg';
import { useState } from "react";


export default function Hpage(){
    // const [subcribe,setsubcribe]=useState({uemail:""})
    return(
        <>
        <div className="page1">
        <h1>Latest Causes</h1>
        <p className="paragrap1">At Helper, there are various charity causes and projects, in which you can always take part. Feel</p> 
        <p className="paragrap2">free to learn about them below or browse our website for more information</p>  
        </div>  
    


    <div className="heroimage">
        <div className="He-img1">
            <img src={image1} alt="image"  />
            {/* <span className="dtnbtn"><Donatebtn/></span> */}
            <h2>Recycling for Charity</h2>
            <h3><span>$92,160</span> of $100,000 raised</h3>
        </div>
        
        <div className="He-img2">
            <img src={image2} alt="image" />
              <h2>Recycling for Charity</h2>
            < h3><span>$92,160</span> of $100,000 raised</h3>
        </div>
        
        <div className="He-img3">
        <img src={image3} alt="image" />
             <h2>Recycling for Charity</h2>
             <h3><span>$92,160</span> of $100,000 raised</h3>
        </div>
    </div>

    <div className="back-img">
        <img src={image} alt="image" />
    </div>

    <div className="he-form">
        <h1>Subscribe to Stay Informed</h1>
        <input type="text" name="uemail" placeholder="Y-Email" /><span className="dtnbtn"><Donatebtn btn='SUBSCRIBE'/></span>
    </div>

        
    </>
  )
 }

 