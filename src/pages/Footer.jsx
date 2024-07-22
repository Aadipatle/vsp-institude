import React, { useEffect } from 'react'
import './Footer.css'
import { Link, NavLink } from 'react-router-dom'
import time from '../Assets/Time.svg'
import call from '../Assets/phone.svg'
import add from '../Assets/Location.svg'
import watsapp from '../Assets/whatsapp.svg'
import email from '../Assets/Email.svg'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
function Footer() {
    useEffect(() => {

    }, [])
    let date = new Date()
    let year = date.getFullYear()
    return (
        <>
            <footer>
                <div className="footer">
                    <div className="form">
                        <h5>Contact Us:</h5>
                        <p>Any Question? We would be happy to help you.</p>
                        <input type="text" placeholder='Email' />
                        <textarea type="text" placeholder='Massage' cols='30' rows='9' />
                        <button>Send</button>
                    </div>
                    <div className="links">
                        <h5>Quick Links</h5>
                        <div className="link-nav">
                            <NavLink to={"/"}>Home</NavLink>
                            <NavLink to={"/"}>Gallary</NavLink>
                            <NavLink to={"/"}>Courses</NavLink>
                            <NavLink to={"/"}>About Us</NavLink>
                            <NavLink to={"/"}>Contact Us</NavLink>
                        </div>
                    </div>
                    <div className="touch">
                        <h5>Get In <span>Touch</span> </h5>
                        <div className="address">
                            <div className="touch-img">
                                <img src={time} alt="" />
                            </div>
                            <div className="touch-para">
                                <p>OFFICE TIMING : 9.30am to 6.00pm</p>
                            </div>
                        </div>
                        <div className="address">
                            <div className="touch-img">
                                <img src={add} alt="" />
                            </div>
                            <div className="touch-para">
                                <p>ADDRESS : Main Jhajjar Rewari Road    Opposite A-Star Hotel Gijrod Jhajjar Haryana</p>
                            </div>
                        </div>
                        <div className="address">
                            <div className="touch-img">
                                <img src={call} alt="" />
                            </div>
                            <div className="touch-para">
                                <p>PHONE:+91-7419810109,+91-9053222249,+91-9053222250</p>
                            </div>
                        </div>
                        <div className="address">
                            <div className="touch-img">
                                <img src={email} alt="" />
                            </div>
                            <div className="touch-para">
                                <p>EMAIL : info@vspaviation.in</p>
                            </div>
                        </div>
                        <div className="address">
                            <div className="touch-img">
                                <img src={watsapp} alt="" />
                            </div>
                            <div className="touch-para">
                                <p>WHATS APP : +91-9053222247</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer-icon">
                    <div className="ficon">
                        <Link to={'/'}><FaInstagram /></Link>
                        <Link to={'/'}><FaLinkedin /></Link>
                        <Link to={'/'}><FaFacebook /></Link>
                        <Link to={'/'}><FaYoutube /></Link>
                        <Link to={'/'}><FaTwitter /></Link>
                    </div>
                    <div className="term">
                        <Link to={'/'}>Terms&Conditions</Link>
                        <Link to={'/'}>Help Center</Link>
                        <Link to={'/'}>Policy</Link>
                        <Link to={'/'}>Privacy</Link>
                    </div>
                    <div className="copy">
                        <span>Copyright{year}.DroneVPS</span>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer