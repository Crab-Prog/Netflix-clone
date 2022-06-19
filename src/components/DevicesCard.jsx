import React from 'react'
import device from "../assets/images/device-pile.png"
import "../styles/DevicesCard.css";

const DevicesCard = () => {
    return (
        <>
            <div className='px-4 py-10 flex flex-col items-center text-center'>
                <h1>
                    Où que vous soyez.
                </h1>
                <h2>
                    Regardez des films et séries TV en accès illimité sur votre TV, smartphone, tablette et ordinateur, tout compris.
                </h2>
            </div>
            <div className='devices-animate flex justify-center items-center w-full'>
                <img src={device} alt="" className='devices-image' />
                <video autoPlay muted loop className='devices-video'>
                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
                </video>
            </div>
        </>
    )
}

export default DevicesCard