import React from 'react';
import OnlineConsultationSearchForm from "./OnlineConsultationSearchForm/OnlineConsultationSearchForm";
import OnlineConsultationText from "./OnlineConsultationText/OnlineConsultationText";
import "./style.scss"
import AdviceButton from "./AdviceButton/AdviceButton";
import InfoContainers from "./InfoContainers/InfoContainers";

const OnlineConsultation = () => {
    return (
        <section id={"online-consultation"}>
            <div className="container">
                <div className="online-container__wrap">
                    <OnlineConsultationSearchForm/>
                    <OnlineConsultationText/>
                    <AdviceButton/>
                    <InfoContainers/>
                </div>

            </div>
        </section>
    );
};

export default OnlineConsultation;