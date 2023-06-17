import React from 'react';
import SearchForm from "./SearchForm/SearchForm";
import OnlineConsultationText from "./OnlineConsultationText/OnlineConsultationText";
import "./style.scss"
import AdviceButton from "./AdviceButton/AdviceButton";
import InfoContainers from "./InfoContainers/InfoContainers";

const OnlineConsultation = () => {
    return (
        <section id={"online-consultation"} style={{background: "url('/image.png'), linear-gradient(249.34deg, #9BC5ED 1.34%, #76AEF5 65.97%)"}}>
            <div className="container">
                <div className="online-container__wrap">
                    <SearchForm/>
                    <OnlineConsultationText/>
                    <AdviceButton/>
                    <InfoContainers/>
                </div>

            </div>
        </section>
    );
};

export default OnlineConsultation;