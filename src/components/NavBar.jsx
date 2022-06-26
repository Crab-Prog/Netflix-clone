import React from 'react';
import logo from '../assets/images/netflix-svgrepo-com.svg';
import "../styles/NavBar.css";

const NavBar = () => {
    return (
        <div className='flex items-center place-content-evenly'>
            <img src={logo} alt="" className='netflix-logo ' />
            <div className='flex h-8 gap-3'>
                <div className='nav-select'>
                    <select id="language-selected" className=' px-6 py-0.5 border-white border rounded-sm'>
                        <option value="language">Français</option>
                        <option value="language">English</option>
                    </select>
                </div>
                <button type='button' className='bg-[red] rounded-sm p-1'>S'identifier</button>
            </div>
        </div>
    )
}

export default NavBar