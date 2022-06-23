import React from 'react'
import "../styles/Footer.css";
import data from "../services/data.json";

const Footer = () => {
  return (
    <div className='text-[#757575] px-6 py-10 flex flex-col items-start text-left'>
      <h2 className='pb-4 text-base'>Des questions ? Appelez le (+33) 0805-543-063
      </h2>
      <ul className='footer-links pb-6 grid grid-cols-2 sm:grid-cols-3'>

        {
          data.map((e) => {
            return <li className='text-base'><span>{e}</span></li>

          })
        }
      </ul>
      <div className='nav-select2 relative  mb-8'>
                    <select id="language-selected" className=' nav-language px-8 py-3 border-[#757575] border rounded-sm'>
                        <option value="language">Français</option>
                        <option value="language">English</option>
                    </select>
                    </div>
                    <p>Netflix France</p>
    </div>
  )
}

export default Footer