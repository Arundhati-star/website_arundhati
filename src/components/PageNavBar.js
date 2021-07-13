import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Typography } from '@material-ui/core';
import { BsGrid3X3Gap } from "react-icons/bs";
import Hicoder from './Hicoder';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
    const [value, setValue] = useState(false);

  const handleClick = () => setClick(!click);
    const handle = () => setValue(!value);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            {/* TRVL
            <i class='fab fa-typo3' /> */}
              <img src="https://hicoder.in/assets/images/logo-dark.png" alt="logo" style={{
                    position: "absolute",
                    marginLeft: "5vw",
                    height: "10vh",
                    paddingTop: "0vh",
                    marginTop: "-0.5vh",
                    width: "10vw",
                }} />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                {/* HiCoder */}
                  <Typography style={{ color: 'black', marginTop: "2vh", marginRight: '2vw', fontWeight: 'bold' }}>
                         HiCoder
                     </Typography>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/course'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                 {/* Course */}
                   <Typography style={{ color: 'black', marginTop: "2vh", marginRight: '2vw', fontWeight: 'bold' }}>
                         Course
                     </Typography>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/hire'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                {/* Hire */}
                <Typography style={{ color: 'black', marginTop: "2vh", marginRight: '2vw', fontWeight: 'bold' }}>
                         Hire
                    </Typography>

              </Link>
            </li>

            <li>
              <Link
                to='/apply-now'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Apply Now
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Apply Now</Button>}
                {/* <Link to='/hicoder'><BsGrid3X3Gap style={{marginLeft:'5vw',height:'8vh',width:'8vw'}}/></Link> */}
                <BsGrid3X3Gap style={{marginLeft:'5vw',height:'8vh',width:'8vw'}}  onClick={handle}/>
                  {value && <Hicoder/>}
                {/* <div onClick={handle}>
                    {value && <Hicoder/>}
                </div> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
