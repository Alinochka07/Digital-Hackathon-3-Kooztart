import React from 'react';
import "./style.scss"

const ChooseSpecialistSearchForm = () => {
    return (
        <div className={"choose-specialist-search__wrap"}>
            <form className={"choose-specialist-search__form"}>
                <input type="text" placeholder={"Кесипти жазыңыз"}/>
                <button>
                    Издөө
                </button>
            </form>
        </div>
    );
};

export default ChooseSpecialistSearchForm;