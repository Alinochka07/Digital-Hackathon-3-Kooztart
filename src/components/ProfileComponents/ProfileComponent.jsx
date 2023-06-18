import React from 'react';
import routesLinks from '../../RoutesLinks';
import { Link } from 'react-router-dom';
import Negotiations from '../../pages/Profile/Negotiations';
import Medicine from '../../pages/Profile/Medicine';
import Opinions from '../../pages/Profile/Opinions';
import Header from '../Header/Header';
import ProfilePage from '../../pages/Profile/ProfilePage';


const ProfileComponent = () => {


    return (
        <nav className='profile__page'>
            <Header/>
            <div className='breadcrumb'>
            </div>
            <div className='profile__edit'>
                <div className='private__info flex'>
                    <img alt='profile__avatar' src=''/>
                    <h3>Касымова Канышай</h3>
                    <button>Профилди түзөтүү</button>
                </div>
                <div>
                    <button><Link to={'/negotiations'}>Сүйлөшүүлөр</Link></button>
                    <button><Link to={'/medicine'}>Дарылар</Link></button>
                    <button><Link to={'/opinions'}>Пикирлер</Link></button>
                </div>
            </div>
           
            </nav>
    );
};

export default ProfileComponent;