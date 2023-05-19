import React from "react";
import style from "./Navigation.module.css"

const Navigation = () => {

    return (

        <div className={style.container}>
            {/* <div className={style.line}></div> */}
            <div className={style.navigate}>
                <div className={style.content}>ПУБЛИКАЦИИ</div>
                <div className={style.content}>REELS</div>
                <div className={style.content}>СОХРАНЕННОЕ</div>
                <div className={style.content}>ОТМЕТКИ</div>
            </div>

        </div>
    )
}

export default Navigation;