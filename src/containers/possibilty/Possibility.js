import React from 'react';
import './possibility.css'

import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
    return (
        <div className='possibility section__padding' id='possibility'>
            <div className='possibility__img'>
                <img src={possibilityImage} alt='possibility'/>
            </div>
            <div className='possibility__content'>
                <h4 id='first-para'>Request Early Access to Get Started</h4>
                <h1 id='content-header' className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p id='large-text'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <h4 id='second-para'>Request Early Access to Get Started</h4>
            </div>
        </div>
    )
}

export default Possibility
