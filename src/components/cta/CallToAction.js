import React from 'react' ;
import './CallToAction.css'

const CallToAction = () => {
    return (
        <div className='cta '>
            <div className='cta__container'>
                <div className='cta__content'>
                    <p>Request Early Access to Get Started</p>
                    <h3>Register today & start exploring the endless possiblities.</h3>
                </div>
                <div className='cta__btn'>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default CallToAction
