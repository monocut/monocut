import React from "react";
import style from "./Authentification.module.css"
import logoInst from "../../images/insta-logo.png"


const Authentification = () => (
        <div className={style.auth_container}>
            <div className={style.auth_content}>
                <div>
                <div className={style.img_container}><img src={logoInst} alt="logo"></img></div>
                <form className={style.auth_form}>
                    <div className={style.auth_box}>
                    <p>Log In</p>
                    <div className={style.form_mail}>
                        <label for="mail">E-mail:</label>
                        <input id="mail" placeholder="e-mail" type="email"></input>
                    </div>
                    <div className={style.form_pass}> 
                        <label for="pass">Password:</label>
                        <input id="pass" placeholder="password" type="password"></input>
                    </div>
                   <div className={style.btn_container}><button>Submit</button></div>
                    </div>

                </form>
                </div>

            </div>
        </div>
    )

export default Authentification;