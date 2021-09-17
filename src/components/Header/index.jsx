import React from 'react';
import './style.css'

const Header = () => {
    return (
        <div className="header" id="header">
            <ul className="nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#band">Band</a></li>
                <li><a href="#tour">Tour</a></li>
                <li><a href="#contact">Contcat</a></li>
                <li>
                    <a href="# ">
                        More
                        <i className="nav-arrow-down ti-angle-down"></i>
                    </a>
                    <ul className="subnav">
                        <li><a href="# ">Merchandise</a></li>
                        <li><a href="# ">Extras</a></li>
                        <li><a href="# ">Media</a></li>
                    </ul>
                </li>
            </ul>

            <div className="search-btn">
                <i className="search-icon ti-search"></i>
            </div>
        </div>
    );
};

export default Header;