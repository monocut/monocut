import React from "react";
import style from "./ProfileInfo.module.css"
import profilePhoto from "../../Images/profilePhoto.jpg"

const ProfileInfo = () => {
    return (
        <div className={style.container}>
            <div className={style.profile_photo}>
                <img src={profilePhoto} alt="profPhoto"></img>
            </div>
            <div className={style.profile_info}>
                <div className={style.name_buttons}>
                    <div className={style.name}>monocut1trecut</div>
                    <button>Редактировать профиль</button>
                    <button>Рекламные инструменты</button>
                </div>
                <div className={style.followers_block}>
                    <div><b>320</b> публикаций</div>
                    <div> <b>869</b> подписчиков</div>
                    <div><b>677</b> подписок</div>
                </div>
                <div className={style.profile_description}>
                    <ul>
                        <li>monocut/trecut</li>
                        <li>Харьков</li>
                        <li>music</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo;