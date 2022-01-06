import React, { useState } from 'react';
import './navbar.css' ;




import { RiMenu3Line , RiCloseLine } from 'react-icons/ri'
// importing logo 
import logo from '../../assets/logo.svg'


// construncting menu 
const Menu = () =>(
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#gpt3">What is GPT?</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
    </>
)

const Navbar = () => {
    // hooks
    const [toggleMenu, setToggleMenu] = useState(false);


    return (
        <div className='gpt__navbar section__padding'>
            <div className='gpt__navbar__links'>
                <div className='gpt__navbar__links-logo'>
                    <img src ={logo} alt ="logo__image"></img>
                </div>
                <div className='gpt__navbar__links-container' >
                    <Menu/>
                </div>
            </div>
                <div className='gpt__navbar__sign' >
                    <p className="signIn">Sign in</p>
                    <button type='submit' id='signUp'>Sign up</button>
                </div>
                <div className='gpt__navbar__menu' >
                  { toggleMenu 
                  ? <RiCloseLine color="#fff" size= {35} onClick={ ()=> setToggleMenu(false) } />  
                  : <RiMenu3Line color="#fff" size= {35} onClick={ ()=> setToggleMenu(true)} /> 
                  }  
                
                { toggleMenu && (
                    <div className='gpt__navbar__menu-container scale-up-center'>
                        <div className='gpt__navbar__menu__container-links'>
                            <Menu/>
                        </div>
                    
                        <div className='gpt__navbar__menu__container-links-sign' >
                            <p className="signIn">Sign in</p>
                            <button type='submit' id='signUp'>Sign up</button>
                        </div>
                    </div>
                )
                }                   
                </div>
    
            
        </div>
    )
}

export default Navbar
