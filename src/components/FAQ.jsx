import React, { useState } from 'react';
import "../styles/FAQ.css";
import cross from "../assets/images/cross.svg";

const FAQ = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible)
    }
    return (
        <div>
            <div>
                <h1 className='m-6 flex flex-col items-center text-center'>Foire aux questions</h1>
                <ul>
                    <li>
                        <button className='faq-question' onClick={handleClick}>
                            Netflix, qu'est-ce que c'est ?
                            <img src={cross} alt="" className='faq-cross' />
                        </button>
                        {isVisible ?
                            <div >
                                <p className='hide-answer p-6 '>
                                    Netflix est un service de streaming qui propose une vaste sélection de séries TV, films, animes, documentaires et autres programmes primés sur des milliers d'appareils connectés à Internet.<br /><br />
                                    Regardez tout ce que vous voulez, quand vous voulez, sans publicité et à un tarif mensuel très attractif. Découvrez de nouveaux films et séries TV chaque semaine, il y en a pour tous les goûts !
                                </p>
                            </div>
                            :
                            false
                        }
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FAQ