import React from 'react'

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

        <div class="hamburger-menu" id="hamburger-menu">
            <div class="menu-bar1"></div>
            <div class="menu-bar2"></div>
            <div class="menu-bar3"></div>
        </div>
    )
}

export default Nav