import React from 'react'
import './feature.css' ;

const Feature = (props) => {
    const {title , text} = props
    return (
        <div className='feature__container'>
            <div className="feature__container-title">
                <div /> {/* for border design  */}
                <h3>{title}</h3>
            </div>
            <div className='feature__container-para'>
               <p> {text}</p>
            </div>
            
        </div>
    )
}

export default Feature
