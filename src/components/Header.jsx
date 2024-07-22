import React from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom'
import icon from "../Assets/logo-removebg-preview 1.svg"
import { IoMenu } from 'react-icons/io5';

function Header() { 
    return (
        <>
            <header className='header'>
                <div className='header_icon'>
                    <img src={icon} alt="" />
                </div>
                <div className='header_nav'>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/"}>Gallary</NavLink>
                    <NavLink to={"/"}>Courses</NavLink>
                    <NavLink to={"/"}>About Us</NavLink>
                    <NavLink to={"/"}>Contact Us</NavLink>
                </div>
                <div className="menu">
                <IoMenu />
                </div>
               
            </header>
        </>
    )
}

export default Header