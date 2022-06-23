import React from 'react'
import device from "../assets/images/device-pile.png"
import "../styles/DevicesCard.css";

const DevicesCard = () => {
    return (
        <>
        <div className='devices '>
            <div className='px-4 pt-10 flex flex-col items-center text-center md:px-8 md:text-left'>
                <h2>
                    Où que vous soyez.
                </h2>
                <h3>
                    Regardez des films et séries TV en accès illimité sur votre TV, smartphone, tablette et ordinateur, tout compris.
                </h3>
            </div>
            <div className='devices-animate flex justify-center items-center w-full'>
                <img src={device} alt="" className='devices-image' />
                <video autoPlay muted loop className='devices-video'>
                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
                </video>
            </div>
            </div>
            <hr></hr>
        </>
    )
}

export default DevicesCard