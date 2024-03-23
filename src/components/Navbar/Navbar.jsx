import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./Navbar.css";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu); 
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <h1 className="nav-heading">ABUBAKAR</h1>
                    <ul>
                        <li>
                            <Link className="menu-item" to="/">Home</Link> 
                        </li>
                        <li>
                            <Link className="menu-item" to="/skills">Skills</Link> 
                        </li>
                        <li>
                            <Link className="menu-item" to="/work-experience">Work Experience</Link>
                        </li>
                        <li>
                            <Link className="menu-item" to="/contact">Contact Me</Link> 
                        </li>
                        <Link className="contact-btn" to="/hire-me">Hire Me</Link>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>
                        {openMenu ? <RxCross2  style={{ fontSize: "1.8rem" }} /> : <MdMenu style={{ fontSize: "1.8rem" }} />}
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
