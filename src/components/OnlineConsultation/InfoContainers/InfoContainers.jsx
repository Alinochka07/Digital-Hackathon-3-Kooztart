import React from 'react';
import "./style.scss"
import timeIcon from "../../../images/Timer.png"
import globusIcon from "../../../images/GlobeStand.png"
import handIcon from "../../../images/HandCoins.png"
import circleIcon from "../../../images/CircleNotch.png"

const InfoContainers = () => {
    return (
        <div className={"info-containers"}>
            <div>
                <img src={timeIcon} alt=""/>
                <p>Убакытты үнөмдөңүз</p>
            </div>
            <div>
                <img src={globusIcon} alt=""/>
                <p>Кайсы жерде болбоңуз толук мүмүкүнчүлүгүңүз бар</p>
            </div>
            <div>
                <img src={handIcon} alt=""/>
                <p>Арзан жана ыңгайлуу</p>
            </div>
            <div>
                <img src={circleIcon} alt=""/>
                <p>Күнү-түнү тажрыйбалуу дарыгер байланышта</p>
            </div>
        </div>
    );
};

export default InfoContainers;