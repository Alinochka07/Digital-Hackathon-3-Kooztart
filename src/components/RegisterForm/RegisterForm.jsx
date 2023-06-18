import React, {useState} from 'react';
import "./style.scss";
import openEyeIcon from "../../images/openEye.png"
import closeEyeIcon from "../../images/closeEye.png"
import googleIcon from "../../images/googleIcon.png"
import instagramIcon from "../../images/instagramIcon.png"
import facebookIcon from "../../images/facebookIcon.png"
import telegramIcon from "../../images/telegramIcon.png"

const RegisterForm = () => {
    const [showPass, setShowPass] = useState(false)
    const [showPass2, setShowPass2] = useState(false)
    const [form, setForm] = useState({
        name: "",
        surname: "",
        number: "",
        password: "",
        password2: ""
    });

    const onFormInputChange = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]: value});
    };

    const inputLabelFunction = (data) => {
        if (data.target.value !== "") {
            data.target.labels[0].style.transform = "translate(-15px, -20px)"
            data.target.labels[0].style.background = "#FFFFFF"
            data.target.labels[0].style.padding = "0 5px"
        }
    }

    const checkPhoneNumber = (text) => {
        if (text.target.value.length === 1 && /^\+/.test(text.target.value)) {
            onFormInputChange(text)
        } else if (text.target.value.length === 2 && /^\+9/.test(text.target.value)) {
            onFormInputChange(text)
        } else if (text.target.value.length === 3 && /^\+99/.test(text.target.value)) {
            onFormInputChange(text)
        } else if (text.target.value.length === 4 && /^\+996/.test(text.target.value)) {
            onFormInputChange(text)
        } else if (text.target.value.length > 4 && text.target.value.length < 14 && /^\+996/.test(text.target.value) && !isNaN(text.target.value.slice(4))) {
            onFormInputChange(text)
        }
    }
    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(form)
    }
    return (
        <form className={"reg__form"} onSubmit={onSubmitForm}>
            <h6>Катталуу</h6>
            <div className="input-label__wrap">
                <input type="text" id={"reg-name"} onChange={(event) => {
                    inputLabelFunction(event)
                    onFormInputChange(event)
                }} name={"name"}/>
                <label htmlFor="reg-name">Атыңыз</label>
            </div>
            <div className="input-label__wrap">
                <input type="text" id={"reg-surname"} onChange={(event) => {
                    inputLabelFunction(event)
                    onFormInputChange(event)
                }} name={"surname"}/>
                <label htmlFor="reg-surname">Фамилияңыз</label>
            </div>
            <div className="input-label__wrap">
                <input type="text" id={"reg-number"} name={"number"} value={form.number} onChange={(event) => {
                    checkPhoneNumber(event)
                    inputLabelFunction(event)
                }}/>
                <label htmlFor="reg-number">Телефон</label>
            </div>
            <div className="input-label__wrap">
                <input type={showPass ? "text" : "password"} id={"reg-password"} name={"password"}
                       onChange={(event) => {
                           inputLabelFunction(event)
                           onFormInputChange(event)
                       }}/>
                <label htmlFor="reg-password">Сырсөз</label>
                <button onClick={(e) => {
                    e.preventDefault()
                    setShowPass(!showPass)
                }}><img src={showPass ? openEyeIcon : closeEyeIcon} alt=""/></button>
            </div>
            <p>Сырсөз тамгалардан, сандардан жана кеминде 8 белгиден турушу керек</p>
            <div className="input-label__wrap">
                <input type={showPass2 ? "text" : "password"} id={"reg-repeat-password"} name={"password2"}
                       onChange={(event) => {
                           inputLabelFunction(event)
                           onFormInputChange(event)
                       }}/>
                <label htmlFor="reg-repeat-password">Сырсөз тастыктоо</label>
                <button onClick={(e) => {
                    e.preventDefault()
                    setShowPass2(!showPass2)
                }}><img src={showPass2 ? openEyeIcon : closeEyeIcon} alt=""/></button>
            </div>
            <input type="submit" value="Катталуу"/>
            <p>-- же социалдык тармактар аркылуу катталыңыз</p>
            <div className="social-media__wrap">
                <button><img src={googleIcon} alt=""/></button>
                <button><img src={facebookIcon} alt=""/></button>
                <button><img src={instagramIcon} alt=""/></button>
                <button><img src={telegramIcon} alt=""/></button>
            </div>
            <p>"Каттоо" баскычын басуу менен, сиз жеке маалыматтарыңызды иштетүүгө макулдук бересиз</p>
        </form>
    );
};

export default RegisterForm;