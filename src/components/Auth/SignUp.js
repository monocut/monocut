import React, { useState } from "react";
import style from "./SignIn.module.css";
import { logo } from "../../images/index"


const SignUp = ({onSignUp}) => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password,
        };
        onSignUp(userData);

        setEmail("");
        setPassword("");
    }

    return(
        <div className={style.auth_container}>
        <div className={style.auth_content}>
            <div>
            <div className={style.img_container}><img src={logo} alt="logo"></img></div>
            <form onSubmit={handleSubmit}className={style.auth_form}>
                <div className={style.auth_box}>
                <p>Регистрация</p>
                <div className={style.form_mail}>
                    <label>E-mail:</label>
                    <input onChange={handleEmailChange} id="mail" placeholder="e-mail" type="email"></input>
                </div>
                <div className={style.form_pass}> 
                    <label>Password:</label>
                    <input onChange={handlePasswordChange} id="pass" placeholder="password" type="password"></input>
                </div>
               <div className={style.btn_container}><button type="submit">Submit</button></div>
                </div>

            </form>
            </div>

        </div>
    </div>
    )

}

export default SignUp;