import React from 'react';
import Ambulance from './Ambulance/Ambulance';
import Optician from '../optician';
import OpticianBar from '../optician/components/optician-bar/OpticianBar';
import OnlineConsultation from '../OnlineConsultation/OnlineConsultation';

const Main = () => {
    return (
        <main className='mainSection'>
            <Ambulance/>
            <Optician/>
            <OnlineConsultation/>
        </main>
    );
};

export default Main;