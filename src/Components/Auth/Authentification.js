import React from "react";
import style from "./Authentification.module.css"


const Authentification = () => {

    return(
        <div className={style.auth_container}>
            <div className={style.auth_content}>
                <form className={style.auth_form}>
                    <div className={style.auth_box}>
                    Registration
                    <div>
                        <label>E-mail:</label>
                        <input placeholder="e-mail" type="email"></input>
                    </div>
                    <div> 
                        <label>Password:</label>
                        <input placeholder="password" type="password"></input>
                    </div>
                   <button>Submit</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Authentification;