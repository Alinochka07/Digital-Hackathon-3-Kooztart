import React from 'react';
import "./style.scss"
import searchIcon from "../../../images/ButtonIcon.png"

const OnlineConsultationSearchForm = () => {
    return (
        <div className={"online-consultation-search-form__wrap"}>
            <form className={"online-consultation-search__form"}>
                <input type="text" placeholder={"Издөө...."}/>
                <button>
                    <img src={searchIcon} alt=""/>
                </button>
            </form>
        </div>

    );
};

export default OnlineConsultationSearchForm;