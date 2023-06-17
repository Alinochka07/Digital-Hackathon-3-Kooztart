import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss"
import terapevtIcon from "../../../images/terapevt.png"
import pediatrIcon from "../../../images/pediatr.png"
import dermatologIcon from "../../../images/dermatolog.png"
import lorIcon from "../../../images/lor.png"
import ginekologIcon from "../../../images/ginekolog.png"
import psihologIcon from "../../../images/psiholog.png"
import cardiologIcon from "../../../images/cardiolog.png"

let settings = {}

const ChooseSpecialistCarousel = () => {
    if(window.innerWidth > 1200){
        settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1
        };
    }else if(window.innerWidth > 1050){
        settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1
        };
    }else if(window.innerWidth > 900){
        settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };
    }else if(window.innerWidth > 650){
        settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
    }else if(window.innerWidth > 450){
        settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1
        };
    }else{
        settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
    }
    console.log(window.innerWidth)
    return (
        <div className={"choose-specialist-carousel__wrap"}>
            <Slider  {...settings}>
                <div className={"choose-specialist-carousel__box"}>
                    <div>
                        <img src={terapevtIcon} alt=""/>
                    </div>
                    <h6>Терапевт</h6>
                </div>
                <div className={"choose-specialist-carousel__box"}>
                    <div>
                        <img src={pediatrIcon} alt=""/>
                    </div>
                    <h6>Педиатр</h6>
                </div>
                <div className={"choose-specialist-carousel__box"}>
                    <div>
                        <img src={dermatologIcon} alt=""/>
                    </div>
                    <h6>Дерматолог</h6>
                </div>
                <div className={"choose-specialist-carousel__box"}>
                    <div>
                        <img src={lorIcon} alt=""/>
                    </div>
                    <h6>Лор</h6>
                </div>
                <div className={"choose-specialist-carousel__box"}>
                    <div>
                        <img src={ginekologIcon} alt=""/>
                    </div>
                    <h6>Гинеколог</h6>
                </div>
                <div className={"choose-specialist-carousel__box"}>
                    <div>
                        <img src={psihologIcon} alt=""/>
                    </div>
                    <h6>Психолог</h6>
                </div>
                <div className={"choose-specialist-carousel__box"}>
                    <div>
                        <img src={cardiologIcon} alt=""/>
                    </div>
                    <h6>Кардиолог</h6>
                </div>
            </Slider>
        </div>
    );
};

export default ChooseSpecialistCarousel;