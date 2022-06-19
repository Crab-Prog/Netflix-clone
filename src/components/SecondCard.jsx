import React from 'react'
import screen from "../assets/images/tv.png";
import "../styles/SecondCard.css";


const SecondCard = () => {
  return (
    <>
      <div className='px-6 py-10 flex flex-col items-center text-center'>
        <h1>
          Regardez Netflix sur votre TV.</h1>
        <h2>Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV, lecteurs Blu-ray et bien plus.</h2>
        </div>
        <div className='second-animate flex justify-center items-center w-full'>
          <img src={screen} alt="" className='second-image' />
          <video autoPlay muted className='second-video'>
            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
          </video>
        </div>
      
    </>
  )
}

export default SecondCard