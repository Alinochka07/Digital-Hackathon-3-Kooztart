import React from 'react';
import Ambulance from './Ambulance/Ambulance';
import Optician from '../optician';
import OnlineConsultation from '../OnlineConsultation/OnlineConsultation';
import ChooseSpecialist from '../ChooseSpecialist/ChooseSpecialist';

const Main = () => {
    return (
        <main className='mainSection'>
            <OnlineConsultation/>
            <ChooseSpecialist/>
            <Ambulance/>
            <Optician/>
            
        </main>
    );
};

export default Main;