import React from 'react';
import logo from "../../images/logo/logo.png";
import "./Footer.scss";
import insta from "../../images/Icons/Instagram.png";
import telegram from "../../images/Icons/Telegram.png";
import tiktok from "../../images/Icons/Tiktok.png";
import youtube from "../../images/Icons/Youtube.png";
import facebook from "../../images/Icons/facebook.png";


const socialMediaIcons = [
    {src: insta},
    {src: telegram},
    {src: tiktok},
    {src: youtube},
    {src: facebook}
]

const Footer = () => {
    return (
        <footer className='footer__section flex flex-jc-c flex-fd-c'>
            <div className='logo__section flex flex-jc-sb flex-ai-c'>
                <img src={logo} alt='online-doctors-logo'/>
                <div className='flex flex-jc-c'><h3>Дарыгерден онлайн кеңеш!</h3></div>
            </div>
            <div className='footer__menu_section flex flex-jc-sb'>
                <div className='footer__menus flex flex-fd-c'>
                    <p>Тез жардам</p>
                    <p>Адис менен байланышуу</p>
                    <p>Катталуу</p>
                    <p>Вакансиялар</p>
                </div>
                <div className='footer__menus flex flex-fd-c'>
                    <p>24 саат күнү - түнү</p>
                    <p>Баарына жеткиликтүү</p>
                </div>
                <div className='footer__menus flex flex-fd-c'>
                    <p>Телефон: <span className='underline'>+996777890876</span></p>
                    <p>Email: <span className='underline'>оnline.daryger@gmail.com</span></p>
                    <div className='social__media__icons flex flex-jc-c flex-ai-c flex-fw-w'>
                        {socialMediaIcons.map((icons, i) => {
                            return <img className='social' key={i} alt='social-media' src={icons.src}/>
                        })}
                        <p>Online daryger</p>
                    </div>
                    
                </div>
                
            </div>
            <p className='text_center'>ONLAIN.DARYGER@ 2023. All rights reserved</p>
        </footer>
    );
};

export default Footer;