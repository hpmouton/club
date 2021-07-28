import React from 'react';
import { Link } from "react-router-dom";
import style from "../style/header.module.css";

export default function Header(){
    return(
        <div className={style.Header}>
            <Link exact to="/explore">
                <img src="/images/images/search.png" alt=""/>
            </Link>
            <div className={style.navItems}>
                <Link exact to="/invite">
                    <img src="/images/images/invite.png" alt=""/>
                </Link>
                <Link exact to="/upcoming">
                    <img src="/images/images/calendar.png" alt=""/>
                </Link>
                <Link exact to="/notifications">
                    <img src="/images/images/noti.png" alt=""/>
                </Link>
                <Link exact to="profile">
                    <img src="/images/images/b1.png" alt=""/>
                </Link>
            </div>

        </div>

    );
}

