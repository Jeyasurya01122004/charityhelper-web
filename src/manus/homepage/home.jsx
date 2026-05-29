import React from 'react'
import './home.css';
import Head from '../../component/header/Header';
import Herosection from '../../component/Herosec/hero';
import Hpage from '../../component/Herosec/Herosecpage';
import Footers from '../../component/footer/Footer';

export default function Home(){
  return(
    <>
        <Head/>
        <Herosection/>
        <Hpage/>
        <Footers/>
    </>
  )
}

