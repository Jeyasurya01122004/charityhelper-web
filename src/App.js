import React from "react";
// import ReactDom from "react-dom/client";
// import Head from "./component/header/Header"
import Home from "./manus/homepage/home";
import Contact from "./manus/homepage/contactpages/Contact";
import About from './manus/homepage/aboutpage/About';
import Charity from '../src/manus/homepage/aboutpage/charitypages/charity'
// import Footers from "./component/footer/Footer";
import {Routes,Route} from 'react-router-dom';
// import Home from "./manus/homepage/home";
function App(){
  return(
    <>
      {/* <Head/> 
       <Home/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Charity' element={<Charity/>}/>
      </Routes>
      {/* <Footers/> */}
      
       {/* <Home/>
      <Contact/>
      <About/>
      <Charity/>
      <h1>charity helper</h1>
      <i class="bi bi-windows"></i> */}
      
    </>
  )
 }; 

 export default App;