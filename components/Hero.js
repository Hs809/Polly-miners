import React from 'react'
import Image from 'next/image'
import HeroImage from '../styles/images/hero.png'

function Hero() {
  return (
    <div className='hero-container'>
        <div className="hero-details">
            <h1>Make Your Mining Rig experience richer with us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur illo quod quam deserunt veniam impedit sunt harum alias soluta reprehenderit?</p>
            <button className="contact-btn">Contact Us</button>
        </div>
        <div className="hero-img">
            <Image src={HeroImage} alt="Hero Image" height={14} width={16} layout="responsive" objectFit='cover' />
        </div>
    </div>
  )
}

export default Hero