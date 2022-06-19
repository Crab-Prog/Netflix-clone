import React from 'react';
import "../styles/DownloadCard.css";
import mobile from "../assets/images/mobile-pic.jpg";
import book from "../assets/images/boxshot.png";

const DownloadCard = () => {
  return (
    <>
    <div className='px-4 py-10 flex flex-col items-center text-center'>
        <h1>Téléchargez vos séries préférées pour les regarder hors connexion.</h1>
        <h2>
    Enregistrez vos programmes préférés et ayez toujours quelque chose à regarder.</h2>
    </div>
    <img src={mobile} alt="" className='' />
    <div className='w-4/5 flex items-center justify-evenly border-2 border-[grey] p-2 rounded-xl'>
        
        <img src={book} alt="" className='w-8' />
        <p className='text-xs'>Téléchargement en cours ...</p>
        <div className='downloadAnimation'></div>
    
    </div>
    </>
  )
}

export default DownloadCard