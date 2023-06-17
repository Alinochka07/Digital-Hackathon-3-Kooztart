import React from 'react';
import ChooseSpecialistSearchForm from "./ChooseSpecialistSearchForm/ChooseSpecialistSearchForm";
import ChooseSpecialistCarousel from "./ChooseSpecialistCarousel/ChooseSpecialistCarousel";
import "./style.scss"

const ChooseSpecialist = () => {
    return (
        <section id={"choose-specialist"}>
            <div className="container">
                <div className="choose-specialist__wrap">
                    <h5>Адистерди өзүңүз тандаңыз</h5>
                    <ChooseSpecialistSearchForm/>
                    <ChooseSpecialistCarousel/>
                </div>
            </div>
        </section>
    );
};

export default ChooseSpecialist;