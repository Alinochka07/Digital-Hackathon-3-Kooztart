import React from 'react';
import Ambulance from './Ambulance/Ambulance';
import Optician from '../optician';
import OpticianBar from '../optician/components/optician-bar/OpticianBar';

const Main = () => {
    return (
        <main className='mainSection'>
            <Ambulance/>
            <Optician/>
        </main>
    );
};

export default Main;