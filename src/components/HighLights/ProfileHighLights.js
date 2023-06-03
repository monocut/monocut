import React from "react";
import style from "./ProfileHighLights.module.css"

const ProfileHighLights = () => {

    return(
        <div className={style.container}>
            <div className={style.highlights_images}>
                <div className={style.preview}></div>
                <div className={style.descript}>text</div>
            </div>
            <div className={style.highlights_images}>
                <div className={style.preview}></div>
                <div className={style.descript}>text</div>
            </div>
            <div className={style.highlights_images}>
                <div className={style.preview}></div>
                <div className={style.descript}>text</div>
            </div>
            <div className={style.highlights_images}>
                <div className={style.preview}></div>
                <div className={style.descript}>text</div>
            </div>
            <div className={style.highlights_images}>
                <div className={style.preview}></div>
                <div className={style.descript}>text</div>
            </div>
            <div className={style.highlights_images}>
                <div className={style.preview}></div>
                <div className={style.descript}>text</div>
            </div>
        </div>
    )
}

export default ProfileHighLights;