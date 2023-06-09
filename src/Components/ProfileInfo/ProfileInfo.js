import React, { useState } from "react";
import style from "./ProfileInfo.module.css"
import profilePhoto from "../../Images/profilePhoto.jpg"
import Authentification from "../Auth/Authentification";
import { ModalWindow } from "../ui components/ModalWindow";

const ProfileInfo = () => {

    const subscribers = [
        {id: 0, email: "oleg_victorov"},
        {id: 1, email: "a.rusanov"}, 
        {id: 2, email: "barva@clothes"},
        {id: 3, email: "d.cherkashina"},
        {id: 4, email: "nastya_barva"},
        {id: 5, email: "oleg_wow"},
        {id: 6, email: "ihor_dan"},
        {id: 7, email: "olga_ppo"},
        {id: 8, email: "v.zelensky"},
        ]

    const [showModal, setShowModal] = useState(false);
    const [isAuth, setIsAuth] = useState(false);

    function logIn() {
        setIsAuth(true)
    }

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
                <button onClick={logIn}>Log in</button>
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
            {showModal && <ModalWindow closeFollowers={closeFollowers} subscribers={subscribers}/>}
            {isAuth && (
                <Authentification/>
            )}



        </div>
    )
}

export default ProfileInfo;