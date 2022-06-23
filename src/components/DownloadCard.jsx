import React from 'react';
import "../styles/DownloadCard.css";
import mobile from "../assets/images/mobile-pic.jpg";
import book from "../assets/images/boxshot.png";

const DownloadCard = () => {
    return (
        <>
            <div className='download-container relative'>
                <div className='px-4 pt-10 flex flex-col items-center text-center md:px-8 md:text-left'>
                    <h2 className='pb-4'>Téléchargez vos séries préférées pour les regarder hors connexion.</h2>
                    <h3>
                        Enregistrez vos programmes préférés et ayez toujours quelque chose à regarder.</h3>
                </div>
                
                    <img src={mobile} alt="" className='w-96 h-80' />
                    <div className='downloadBox absolute w-4/5 flex items-center justify-evenly border-2 border-[grey] p-2 rounded-xl'>

                        <img src={book} alt="" className='w-8' />
                        <p className='text-s'>Téléchargement en cours ...</p>
                        <div className='downloadAnimation'></div>
                    </div>
            </div>
            <hr></hr>
        </>

    )
}

export default DownloadCard