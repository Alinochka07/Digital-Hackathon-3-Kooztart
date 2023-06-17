import React from 'react';
import "./style.scss"
import searchIcon from "../../../images/ButtonIcon.png"

const SearchForm = () => {
    return (
        <div className={"search-form__wrap"}>
            <form className={"search__form"}>
                <input type="text" placeholder={"Издөө...."}/>
                <button>
                    <img src={searchIcon} alt=""/>
                </button>
            </form>
        </div>

    );
};

export default SearchForm;