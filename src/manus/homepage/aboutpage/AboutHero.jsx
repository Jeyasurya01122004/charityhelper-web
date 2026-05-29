import React from 'react';
import './AboutHero.css';
import Aimage from '../../../assets/A-img.jpg';
import Aboutpart from './Aboutpart';
import cardimg1 from '../../../assets/cardimg1.jpg';
import cardimg2 from '../../../assets/cardimg2.jpg';
import cardimg3 from '../../../assets/cardimg3.jpg';
import cardimg4 from '../../../assets/cardimg4.jpg';
import cardimg5 from '../../../assets/cardimg5.jpg';
import cardimg6 from '../../../assets/cardimg6.jpg';

export default function HeroAbo(){
    return(
        <>
        <div className='section'>
                <div className='A-content1-R'>
                    <img src={Aimage} alt="img" />
                </div>
                <div className='A-content1-L'>
                    <h1>About Helper</h1>
                    <h2>We are committed to helping wounded kids find their place.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                        natoque penatibus et magnis dis parturient montes, nascetur 
                        ridiculus mus. Donec quam felis, ultricies nec, pellentesqu </p>

                       <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque
                        ipsa quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                        quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>
                </div>
        </div>

                    <h1 className='cardtittle'>Our Mission</h1>
        <div className="cards1">
                <div className='part1' >
                     <i class="bi bi-globe-americas"></i>
                    <Aboutpart  headpara="Achieving Change" content='Grandis, albus decors etiam desiderium de noster, clemens vita.'/> 
                </div>
                <div className='part1' >
                     <i class="bi bi-umbrella"></i>
                    <Aboutpart  headpara="Care & Protection" content='Cum advena peregrinationes, omnes brabeutaes manifestum germanus.'/> 
                </div>
                <div className='part1' >
                     <i class="bi bi-emoji-smile"></i>
                    <Aboutpart  headpara="Saving Children" content='Cum zirbus favere, omnes habenaes talem barbatus, brevis fraticinidaes.'/> 
                </div>

            </div>  

            <div className='cards2'>
                        <div className='part1' >
                            <i class="bi bi-brightness-high"></i>
                            <Aboutpart  headpara="Achieving Change" content='Grandis, albus decors etiam desiderium de noster, clemens vita.'/> 
                        </div>
                        <div className='part1' >
                            <i class="bi bi-leaf"></i>
                            <Aboutpart  headpara="Care & Protection" content='Cum advena peregrinationes, omnes brabeutaes manifestum germanus.'/> 
                        </div>
                        <div className='part1' >
                            <i class="bi bi-share"></i>
                            <Aboutpart  headpara="Saving Children" content='Cum zirbus favere, omnes habenaes talem barbatus, brevis fraticinidaes.'/> 
                        </div>  
            </div>   


        <div className='imgcard'>
             
             <div className='imgcard1'>
                 <img src={cardimg1} alt="img" />
                 <h2>Jane Smith</h2>
                 <h4>Executive director</h4>
            </div>  

            <div className='imgcard2'>
                 <img src={cardimg2} alt="img" />
                 <h2>Albert Martinez</h2>
                 <h4>Adoption program Director</h4>
            </div>   
              
            <div className='imgcard3'>
                 <img src={cardimg3} alt="img" />
                 <h2>Ann Allen</h2>
                 <h4>Educational program Director</h4>
            </div>     
        </div> 
        <div className='cardimg'>
              <div className='imgcard1'>
                 <img src={cardimg4} alt="img" />
                 <h2>Jane Smith</h2>
                 <h4>Executive director</h4>
            </div>  

            <div className='imgcard2'>
                 <img src={cardimg5} alt="img" />
                 <h2>Albert Martinez</h2>
                 <h4>Adoption program Director</h4>
            </div>   
              
            <div className='imgcard3'>
                 <img src={cardimg6} alt="img" />
                 <h2>Ann Allen</h2>
                 <h4>Educational program Director</h4>
            </div> 







            {/* <img src={cardimg4} alt="img" />
            <img src={cardimg5} alt="img" />
            <img src={cardimg6} alt="img" /> */}
        </div>


        </>
    )
}