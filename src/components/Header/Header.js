import React, { useEffect } from "react";
import { useState } from "react";
import style from "./Header.module.css";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";

const Header = ({auth}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);
    const [isHaveToken, setIsHaveToken] = useState(false);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser);
            setIsAuth(true);
        }
    }, []);

    function logIn(userData) {
        setUser(userData);
        setIsAuth(true);
        localStorage.setItem("user", JSON.stringify(userData));
    }

    function signUp() {
        setIsHaveToken(true);
    }
  
    return(
        <div className={style.container}>
            <div className={style.header}>
                {!isAuth && (
                    <button onClick={logIn}>Войти</button>
                )}
                {!isAuth && (
                    <button onClick={signUp}>Регистрация</button>
                )}
                {isAuth && (
                    <span>
                        Добро пожаловать, {user.name}!
                    </span>
                )}
                    
                    
            </div>
            {isAuth && (
                <SignIn />
            )}
            {isHaveToken && (
                <SignUp onSignUp={logIn}/>
            )}
        </div>
    )
}

export default Header;