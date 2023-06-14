import React from "react";
import style from "./Nav.module.css";
import { logo } from "../../images/index"
import { NAVIGATION } from "./constants";


const Nav = () => {
    return(
        <div className={style.container}>
            <div className={style.logo}>
              <img src={logo} alt="logo"></img>
            </div>
            <div className={style.nav_list}>
            <ul>
                {NAVIGATION.map((el) => {
                    return <li key={el.title}><button>{el.title}</button></li>} )}
            </ul>
            </div>

        </div>
    )
}

export default Nav;