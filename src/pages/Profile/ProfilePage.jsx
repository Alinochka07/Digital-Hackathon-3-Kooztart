import React from 'react';
import Header from "../../components/Header/Header";
import "./ProfilePage.scss";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Negotiations from './Negotiations';
import routesLinks from '../../RoutesLinks';
import Opinions from './Opinions';
import ProfileComponent from '../../components/ProfileComponents/ProfileComponent';
import Medicine from './Medicine';

// const breadcrumb = {
//     backgroundColor: 'white',
//     border: '1px solid rgba(0, 0, 0, 0.125)',
//     borderRadius: '0.37rem'
// }

const ProfilePage = () => {



    return (
        <>
            <ProfileComponent/>
        </>
    );
};

export default ProfilePage;