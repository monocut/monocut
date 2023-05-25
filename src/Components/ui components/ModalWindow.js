import React from "react";
import style from "../ProfileInfo/ProfileInfo.module.css";

export const ModalWindow = (props) => {

    return(
        <div className={style.modal_followers}>
                    <div className={style.modal_content}>
                        <div className={style.modal_header}>
                        <div>Подписчики</div>
                        <button onClick={props.closeFollowers}>X</button>
                        </div>
                        <ul>
                            {props.subscribers.map((el) =>
                            {return (<li key={el.id}>{el.email} <button>Подписаться</button></li>)
                            })}

                        </ul>
                    </div>
                </div>
    )
}