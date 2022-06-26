import React from 'react';
import "../styles/Welcome.css";

const Welcome = () => {
    return (
        <div className='welcome-container pb-8 flex align-center justify-center'>
            <div className='m-6 flex flex-col items-center text-center'>
                <h1 className='pt-10 pb-6'>Films, séries TV et bien plus en illimité.</h1>
                <p className='welcome-p pb-4'>Où que vous soyez. Annulez à tout moment.</p>
                <div className='welcome-search'>
                    <label htmlFor="mail-address">
                        <h3 className='pb-2 text-base' >Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</h3>

                        <input type="text" id="mail-address" placeholder='Adresse e-mail' className='bg-white mb-4 h-10 w-10/12 p-3 text-sm' />
                    </label>

                    <button type='submit' className='bg-[red] rounded-sm p-2 '>Commencer</button>
                </div>
            </div>
        </div>
    )
}

export default Welcome