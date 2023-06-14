import React from "react";
import style from "./ContentWall.module.css"

const ContentWall = () => {

    return (
        <div className={style.container}>
            <div className={style.publication}></div>
            <div className={style.publication}></div>
            <div className={style.publication}></div>
            <div className={style.publication}></div>
            <div className={style.publication}></div>
            <div className={style.publication}></div>

        </div>
    )
}

export default ContentWall;