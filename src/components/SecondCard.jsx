import React from 'react'
import screen from "../assets/images/tv.png";
import "../styles/SecondCard.css";


const SecondCard = () => {
  return (
    <>
      <div className='second py-10 md:px-8'>
        <div className='px-6  flex flex-col items-center text-center md:text-left'>
          <h2>
            Regardez Netflix sur votre TV.</h2>
          <h3>Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV, lecteurs Blu-ray et bien plus.</h3>
        </div>
        <div className='second-animate flex justify-center items-center'>
          <img src={screen} alt="" className='second-image' />
          <video autoPlay muted loop className='second-video'>
            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
          </video>
        </div>
      </div>
      <hr></hr>
    </>
  )
}

export default SecondCard