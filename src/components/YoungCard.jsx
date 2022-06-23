import React from 'react';
import kids from "../assets/images/kidsValueProp.png";
import "../styles/YoungCard.css";

const YoungCard = () => {
    return (
        <div className="young-container">
                <div className='young px-6 py-10 flex flex-col items-center text-center md:px-8 md:text-left'>
                    <h2>Créez des profils pour les enfants.</h2>
                    <h3>Les enfants découvrent de nouvelles aventures et retrouvent leurs personnages préférés dans un espace bien à eux, déjà inclus dans votre abonnement.</h3>
                </div>
                
                    <img src={kids} alt='' className='young-image' />
        </div>
    )
}

export default YoungCard