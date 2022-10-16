import React from 'react'
import Hero from './hero/Hero'
import About from './about/About'
import Slider from './slider/Slider'
import Attraction from './attraction/Attraction'
import Brochure from './brochure/Brochure'
import './Home.css'

export default function Home() {
  return (
  
    <div className='home'>
      <Hero/>
      <About/>
      <div>
        <h1 className='subtitle slider_h1'>HIGHLIGHTS <div className='bottom_line'></div>
        </h1>
       
        <Slider/>
      </div>  
      <Attraction/>
      <Brochure/>
      </div>
    
  )
}
