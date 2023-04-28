import React from 'react';
import img from './../Assets/logo.png'
import { GiFilmSpool } from 'react-icons/gi';

import './../../CSS/Movie_App/Header.css'
const Header = () => {
    return (
        <div style={{background:'red'}}>
            <nav className="navbar navbar-expand-lg header">
                <div className="container d-flex justify-content-center align-items-center">
                    <a className="navbar-brand" href="/">
                        {/* <img src={img} alt="Movie Search App" width="100" height="100" /> */}
                        <GiFilmSpool  size={64} color={'rgb(247, 31, 2)'}/>
                        <span className="ml-2">Movie Search App</span>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Header;
