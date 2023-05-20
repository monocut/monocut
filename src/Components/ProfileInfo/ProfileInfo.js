import React, { useState } from "react";
import style from "./ProfileInfo.module.css"
import profilePhoto from "../../Images/profilePhoto.jpg"

const ProfileInfo = () => {

    const [showModal, setShowModal] = useState(false);

    function showFollowers() {
        setShowModal(true)
    }
    function closeFollowers() {
        setShowModal(false)
    }
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
                    <button onClick={showFollowers} className={style.follow_unfollow_btn}> <b>869</b> подписчиков</button>
                    <button onClick={showFollowers} className={style.follow_unfollow_btn}><b>677</b> подписок</button>
                </div>
                <div className={style.profile_description}>
                    <ul>
                        <li>monocut/trecut</li>
                        <li>Харьков</li>
                        <li>music</li>
                    </ul>
                </div>
            </div>
            {showModal && (
                <div className={style.modal_followers}>
                    <div className={style.modal_content}>
                        <div className={style.modal_header}>
                        <div>Подписчики</div>
                        <button onClick={closeFollowers}>X</button>
                        </div>
                        <ul>
                            <li>oleg_victorov<button>Подписаться</button></li>
                            <li>barva@clothes<button>Подписаться</button></li>
                            <li>d.cherkashina<button>Подписаться</button></li>
                            <li>a.rusanov<button>Подписаться</button></li>
                            <li>nastya_barva<button>Подписаться</button></li>
                            <li>oleg_wow<button>Подписаться</button></li>
                            <li>ihor_dan<button>Подписаться</button></li>
                            <li>olga_ppo<button>Подписаться</button></li>
                            <li>v.zelensky<button>Подписаться</button></li>
                        </ul>
                    </div>
                </div>

            )}



        </div>
    )
}

export default ProfileInfo;