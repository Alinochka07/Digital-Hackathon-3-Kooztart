import React from 'react';
import buttonArrow from "../../../images/Arrow 13.png"
import "./style.scss"

const OnlineConsultationText = () => {
    return (
        <div className={"online-consultation-text__wrap"}>
            <h1>Дарыгерден онлайн кеңеш</h1>
            <p>Эми сиз күнү-түнү адиске суроо берип, тез жооп ала аласыз</p>
            <button>
                <span>Кайрылуу</span>
                <img src={buttonArrow} alt=""/>
            </button>

        </div>
    );
};

export default OnlineConsultationText;