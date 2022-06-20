import React, { useState } from 'react';
import "../styles/FAQ.css";
import cross from "../assets/images/cross.svg";

const FAQ = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isFocus, setIsFocus] = useState(false)

    const handleClick = () => {
        setIsVisible(!isVisible)
        setIsFocus(!isFocus)
    }
    return (
        <div>
            <div className='faq-bottom'>
                <h1 className='m-6 flex flex-col items-center text-center'>Foire aux questions</h1>
                <ul>
                    <li className='pb-2'>
                        <button className='faq-question text-lg' onClick={handleClick} value="select">
                            Netflix, qu'est-ce que c'est ?
                            <img src={cross} alt="" className={isFocus ? "faq-plus faq-cross" : "faq-cross"} />
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
                    <li className='pb-2'>
                        <button className='faq-question text-lg' onClick={handleClick}>
                            Combien coûte Netflix ?
                            <img src={cross} alt="" className={isFocus ? "faq-plus faq-cross" : "faq-cross"} />
                        </button>
                        {isVisible ?
                            <div >
                                <p className='hide-answer p-6 '>
                                    Regardez Netflix sur votre smartphone, tablette, Smart TV, ordinateur ou appareil de streaming, le tout pour un tarif mensuel fixe.
                                    Les forfaits vont de 8,99 € à 17,99 € par mois. Pas de contrat ni de frais supplémentaires.</p>
                            </div>
                            :
                            false
                        }
                    </li>
                    <li className='pb-2'>
                        <button className='faq-question text-lg' onClick={handleClick}>
                            Où puis-je regarder Netflix ?
                            <img src={cross} alt="" className={isFocus ? "faq-plus faq-cross" : "faq-cross"} />
                        </button>
                        {isVisible ?
                            <div >
                                <p className='hide-answer p-6 '>
                                    Netflix, c'est où vous voulez, quand vous voulez. Connectez-vous à votre compte pour regarder Netflix en ligne sur netflix.com depuis votre ordinateur ou tout appareil connecté à Internet avec l'application Netflix, comme les Smart TV, smartphones, tablettes, lecteurs de streaming et consoles de jeu.<br /><br />
                                    Vous pouvez aussi télécharger vos séries préférées avec l'application iOS, Android ou Windows 10. Téléchargez des titres pour les regarder sur votre appareil mobile, même sans connexion Internet. Emportez Netflix partout avec vous.
                                </p>
                            </div>
                            :
                            false
                        }
                    </li>
                    <li className='pb-2'>
                        <button className='faq-question text-lg' onClick={handleClick}>
                            Comment puis-je annuler mon forfait ?
                            <img src={cross} alt="" className={isFocus ? "faq-plus faq-cross" : "faq-cross"} />
                        </button>
                        {isVisible ?
                            <div >
                                <p className='hide-answer p-6 '>
                                    Netflix offre une grande souplesse. Pas de contrat compliqué. Sans engagement.
                                    Deux clics suffisent pour annuler votre compte en ligne. Pas de frais d'annulation : ouvrez ou fermez votre compte à tout moment.</p>
                            </div>
                            :
                            false
                        }
                    </li>
                    <li className='pb-2'>
                        <button className='faq-question text-lg' onClick={handleClick}>
                            Que puis-je regarder sur Netflix ?
                            <img src={cross} alt="" className={isFocus ? "faq-plus faq-cross" : "faq-cross"} />
                        </button>
                        {isVisible ?
                            <div >
                                <p className='hide-answer p-6 '>
                                    Netflix propose un vaste catalogue comprenant notamment des longs métrages, des documentaires, des séries TV, des animes et des programmes originaux Netflix primés.
                                    Regardez Netflix à volonté, quand vous le voulez.</p>
                            </div>
                            :
                            false
                        }
                    </li>
                    <li className='pb-2 '>
                        <button className='faq-question text-lg' onClick={handleClick}>
                            Est-ce que Netflix est adapté aux enfants ?
                            <img src={cross} alt="" className={isFocus ? "faq-plus faq-cross" : "faq-cross"} />
                        </button>
                        {isVisible ?
                            <div >
                                <p className='hide-answer p-6 '>
                                    Netflix Jeunesse est inclus dans votre abonnement et offre un meilleur contrôle aux parents, ainsi qu'un espace dédié aux enfants, avec des films et des séries destinés à toute la famille.<br /><br />
                                    Les profils Enfants comportent des fonctionnalités de contrôle parental avec code PIN permettant de modifier la catégorie d'âge des contenus que vos enfants peuvent regarder et de bloquer des titres spécifiques.</p>
                            </div>
                            :
                            false
                        }
                    </li>
                </ul>
                {/* <details>
                    <summary onClick={handleClick}> Est-ce que Netflix est adapté aux enfants ?
                    <img src={cross} alt="" className={isFocus ? "cross-questions faq-plus" : "cross-questions"} />
                    </summary>
                    Netflix Jeunesse est inclus dans votre abonnement et offre un meilleur contrôle aux parents, ainsi qu'un espace dédié aux enfants, avec des films et des séries destinés à toute la famille.<br /><br />
                      
                </details> */}
                <div className=' m-6 flex flex-col items-center text-center'>
                    <label htmlFor="mail-address">
                        <h3 className='pb-2 text-lg' >Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</h3>

                        <input type="text" id="mail-address" placeholder='Adresse e-mail' className='bg-white mb-4 h-10 w-full p-3 text-sm' />
                    </label>
                    <button type='submit' className='bg-[red] rounded-sm p-1 '>Commencer</button>
                </div>
            </div>
        </div>
    )
}

export default FAQ