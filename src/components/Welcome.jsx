import React from 'react';
import "../styles/Welcome.css";

const Welcome = () => {
    return (
        <div className='welcome-container pb-8'>
            <div className='m-6 flex flex-col items-center text-center'>
                <h1>Films, séries TV et bien plus en illimité.</h1>
                <h2 className='pb-4'>Où que vous soyez. Annulez à tout moment.</h2>
                <div >
                    <label htmlFor="mail-address">
                        <h3 className='pb-2' >Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</h3>

                        <input type="text" id="mail-address" placeholder='Adresse e-mail' className='bg-white mb-4 h-10 w-full p-3 text-sm' />
                    </label>
                </div>
                <button type='submit' className='bg-[red] rounded-sm p-1 '>Commencer</button>
            </div>
        </div>
    )
}

export default Welcome