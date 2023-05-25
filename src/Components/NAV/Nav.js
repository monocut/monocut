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
                <li><button>Главная</button></li>
                <li><button>Поисковый запрос</button></li>
                <li><button>Интересное</button></li>
                <li><button>Reels</button></li>
                <li><button>Сообщения</button></li>
                <li><button>Уведомления</button></li>
                <li><button>Создать</button></li>
                <li><button>Профиль</button></li>
                <li><button>Еще</button></li>

            </ul>
            </div>

        </div>
    )
}

export default Nav;