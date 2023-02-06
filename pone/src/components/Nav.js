// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
import { FaInstagram } from 'react-icons/fa'
import React from 'react'
import '../App.css'

const Nav = () => {
    return (
        // <div>
        //     <ul className="nav nav-pills nav-fill gap-2 p-1 small rounded-5" id="pillNav2" role="tablist" Style="--bs-nav-pills-link-active-color: var(--bs-secondary); --bs-nav-pills-link-active-bg: var(--bs-white);">
        //         <li className="nav-item" role="presentation">
        //             <button className="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
        //         </li>
        //         <li className="nav-item" role="presentation">
        //             <button className="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Profile</button>
        //         </li>
        //         <li className="nav-item" role="presentation">
        //             <button className="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Contact</button>
        //         </li>
        //     </ul>
        // </div>
        <div className="nav">
            <div className="hamburger-menu" id="hamburger-menu">
                <div className="menu-bar1"></div>
                <div className="menu-bar2"></div>
                <div className="menu-bar3"></div>
            </div>

            <h3 className='title'>BUĞRA YÜZER</h3>

            <FaInstagram size="30" className='instagram' />
        </div>
    )
}

export default Nav