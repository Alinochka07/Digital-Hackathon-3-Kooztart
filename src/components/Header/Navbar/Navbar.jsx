import React, {useState} from 'react';
import "./Navbar.scss";
import logo from "../../../images/logo/logo.png";
import routesLinks from '../../../RoutesLinks';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <nav className='navbar flex'>
            <div className='navbar__menu flex flex-ai-c flex-jc-sb'>
                <div className='logo'>
                    <img src={logo} alt='online-doctor'/>
                </div>
                <div className='navbar__menu__items flex flex-jc-sb flex-ai-c'>
                    {routesLinks.map((menu, i) => {
                        if (menu.isShown === true) {
                        return <div key={i} className='menu__items'><Link to={menu.path}>{menu.name}</Link></div>
                    }})}
                    
                </div>
                <div className='navbar__menu__reglan flex flex-ai-c flex-jc-fe'>
                    <div className='menu__reglan'>Кирүү /</div>
                    <div className='menu__reglan'>Катталуу</div>
                    <div className='menu__reglan flex flex-ai-c'>
                        <select className='lan__select'>
                            <option>KG</option>
                            <option>RU</option>
                        </select>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;