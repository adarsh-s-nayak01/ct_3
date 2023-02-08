import React from 'react'
//rafce.
import { Navbar,Brand,CTA } from './components';
// import Navbar from './components/navbar/Navbar';
import {Footer, Header, Possibility,Features,WhatGPT3,Blog} from './containers'
import './App.css';


const App = () => {
  return (
    <div className="App">
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>

        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
        
    </div>
  )
}

export default App;