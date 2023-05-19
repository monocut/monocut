import React from "react";
import style from "./Nav.module.css";
import instLogo from "../../Images/insta-logo.png"


const Nav = () => {

    return(
        <div className={style.container}>
            <div className={style.logo}>
              <img src={instLogo} alt="logo"></img>
            </div>
            <div className={style.nav_list}>
            <ul>
                <li>Главная</li>
                <li>Поисковый запрос</li>
                <li>Интересное</li>
                <li>Reels</li>
                <li>Сообщения</li>
                <li>Уведомления</li>
                <li>Создать</li>
                <li>Профиль</li>
                <li>Еще</li>

            </ul>
            </div>

        </div>
    )
}

export default Nav;