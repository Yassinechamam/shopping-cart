import React from 'react';
import "./hero.css";
import hero from "../../assets/hero-image.png"

export const Hero = () => {
  return (
    <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    
                    <h1>Free personal shopping at the tap of a button.</h1>
                    <p>Take control of how you shop online and feel good about your purchases. Virtual Shopping connects you with experts who’ll help find products tailored to you. Now available in the Klarna app.</p>
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={hero} alt=''/>
                    </div>
                </div>
            </div>
        </div>
  )
}
