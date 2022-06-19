import React from 'react';
import kids from "../assets/images/kidsValueProp.png";
import "../styles/YoungCard.css";

const YoungCard = () => {
    return (
        <>
            <div className='px-6 py-10 flex flex-col items-center text-center'>
                <h1>Créez des profils pour les enfants.</h1>
                <h2>Les enfants découvrent de nouvelles aventures et retrouvent leurs personnages préférés dans un espace bien à eux, déjà inclus dans votre abonnement.</h2>
            </div>
            <img src={kids} alt='' className='young-image'/>
        </>
    )
}

export default YoungCard