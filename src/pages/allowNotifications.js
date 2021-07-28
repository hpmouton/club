import React from 'react';
import style from "../style/phoneConfirm.module.css";
import { Link } from "react-router-dom";

export default function AllowNotifications(){
    return(
        <div className={style.phoneConfirmContainer}>
            <div className="text-center">
                <h1 className="mb-4">One Last Step!</h1>
                <h1 className="mb-3">Enable Notifications to see when people are speaking.</h1>
                <div className={style.notificationContainer}>
                    <div className="p-3">
                        <h3>INCEIT Would Like To Send You Notifications.</h3>
                        <p>Notifications may include alerts, sounds, etc</p>
                    </div>
                    <div className={style.action_btn}>
                        <Link exact to="/home">Don't Allow</Link>
                        <Link exact to="/home">Allow</Link>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}