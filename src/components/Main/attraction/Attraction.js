import React from 'react'
import './Attraction.css'
import aeromodelling from './assets/aeromodelling.jpg'
import autoExpo from './assets/autoexpo.png'
import djNight from './assets/djnight.jpeg'
import { Zoom } from 'react-awesome-reveal'
import comingSoon from './assets/comingSoon1.png'
import bikeStunt from './assets/stunt.jpg'
import { Link } from "react-router-dom";

export default function attraction() {
  return (
    <>
    <div className='attraction_outer_container'>
        <h1 className='subtitle slider_h1'>ATTRACTIONS<div className='bottom_line'></div>
        </h1>

        <div className='card_container'>
            <Zoom>
            <div className='card'>
                <img src={aeromodelling} alt="Air Show" />
                <h3>Air Show</h3>
                <span>NOV 11 | 10:00 AM</span>
            </div>
           
            <div className='card'>
                <img src={autoExpo} alt="Auto Expo" />
                <h3>Auto Expo</h3>
                <span>NOV 12 | 10:30 AM</span>
            </div>

            <div className='card'>
                <img src={bikeStunt} alt="Stunt Show" />
                <h3>Bike Stunt Show</h3>
                <span>NOV 12 | 4:00 PM</span>
            </div>

            <div className='card'>
                <img src={djNight} alt="DJ N21ight" />
                <h3>DJ Night</h3>
                <span>NOV 13 | 7:00 PM</span>
            </div>
            
            <div className='card'>
                <img src={comingSoon} alt="Coming Soon" />
                <h3>Coming Soon</h3>
                <span>TBD</span>
            </div>
            </Zoom>
        </div>
    </div>
    <div className='view-event-mobile'>
        <h3>Check out our <Link to="./events" className='gradient-text-background'>Events</Link></h3>
        
    </div>

    </>
  )
}
