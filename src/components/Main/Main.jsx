import React from 'react';
import Ambulance from './Ambulance/Ambulance';
import Optician from '../optician';
import OnlineConsultation from '../OnlineConsultation/OnlineConsultation';

const Main = () => {
    return (
        <main className='mainSection'>
            <OnlineConsultation/>
            <Ambulance/>
            <Optician/>
            
        </main>
    );
};

export default Main;