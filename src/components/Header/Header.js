import React from "react";
import { useState } from "react";
import style from "./Header.module.css";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";

const Header = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [isHaveToken, setIsHaveToken] = useState(false);

    function logIn() {
        setIsAuth(true)
    }
    function signUp() {
        setIsHaveToken(true);
    }

    return(
        <div className={style.container}>
            <div className={style.header}>
                    <button onClick={logIn}>Войти</button>
                    <button onClick={signUp}>Регистрация</button>
            </div>
            {isAuth && (
                <SignIn />
            )}
            {isHaveToken && (
                <SignUp />
            )}
        </div>
    )
}

export default Header;