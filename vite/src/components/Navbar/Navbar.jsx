import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/file.png"
import menu_icon from "../../assets/menu-icon.png"
import { Link } from 'react-scroll';

const navLinks = [
  { to: "hero", label: "Home", offset: 0 },
  { to: "program", label: "Programs", offset: -260 },
  { to: "about", label: "About-us", offset: -150 },
  { to: "campus", label: "Campus", offset: -260 },
  { to: "testimonials", label: "Testimonials", offset: -260 },
  { to: "news", label: "News", offset: -260 },
  { to: "event", label: "Events", offset: -260 },
  { to: "achievements", label: "Achievements", offset: -260 },
  { to: "contact", label: "Contact-us", offset: -260 },
];

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenu(prev => !prev);
  const closeMenu = () => setMobileMenu(false);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="College Logo" className='logo' />
      <ul className={mobileMenu ? " " : "hide-mobile-menu"}>
        {navLinks.map(({ to, label, offset }) => (
          <li key={to}>
            <Link
              to={to}
              smooth={true}
              offset={offset}
              duration={500}
              spy={true}
              onSetActive={() => setActiveLink(to)}
              className={activeLink === to ? 'nav-active' : ''}
              onClick={closeMenu}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <img src={menu_icon} alt="Menu" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
  