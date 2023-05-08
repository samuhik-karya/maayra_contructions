import React from 'react'
import '../assets/stylesheets/navbar.css'
import Logo from '../assets/images/logoMain.png'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light px-3 sticky-top">
                <div className="w-100 order-1 navbar-col">
                    <img className='brand-logo' src={Logo} alt="Maayra Constructions" />
                </div>

                <div className="w-100 order-3 text-end navbar-col">
                    <button className="menu-button" type="button">
                        <div className='d-flex justify-content-around align-items-center'><span className="navbar-toggler-icon"></span><span className='navbar-toggler-title px-2 py-0'> Menu</span></div>
                    </button>
                </div>

                <div className="mx-auto order-2 w-100 text-center navbar-col-collapse">
                    <p className='m-0 p-1'>Luxurious & Premium Quality House (RCC Civil Contractor)</p>
                    <hr className='m-0 nav-hr' />
                    <div className='m-0 p-2 fw-bold d-flex align-items-center justify-content-around'>
                        <a className='navbar-middle-link' href="#!">Villa & Bunglows</a>
                        <hr className='m-0 vr' />
                        <a className='navbar-middle-link' href="#!">Row Houses</a>
                        <hr className='m-0 vr' />
                        <a className='navbar-middle-link' href="#!">Club Houses</a>
                    </div>
                </div>
            </nav>
        </>
    )
}