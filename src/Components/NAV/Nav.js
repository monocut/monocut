import React from "react";
import style from "./Nav.module.css";
import instLogo from "../../Images/insta-logo.png";
import { NAVIGATION } from "./constants";


const Nav = () => {
    return(
        <div className={style.container}>
            <div className={style.logo}>
              <img src={instLogo} alt="logo"></img>
            </div>
            <div className={style.nav_list}>
            <ul>
                {NAVIGATION.map((el) => {
                    return <li><button>{el.title}</button></li>} )}
            </ul>
            </div>

        </div>
    )
}

export default Nav;