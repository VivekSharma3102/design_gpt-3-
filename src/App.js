import React from 'react'

import './App.css' ;

// importing components --
import { Article, Brand, CallToAction , Navbar } from './components'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers'


export default function App() {
    return (

        <>
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar/>
                <Header/>
            </div>
            <Brand/>
            <WhatGPT3/>
            <Features/>
            <Possibility/>
            <CallToAction/>
            <Blog/>
            <Footer/>
        </div>

            
            
        </>
    )
}
