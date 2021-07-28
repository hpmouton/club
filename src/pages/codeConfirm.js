import React from "react";
import style from "../style/phoneConfirm.module.css";
import { Link } from "react-router-dom";

export default function CodeConfirm(){
    return( 
    <div className={style.phoneConfirmContainer}>
        <div exact to='/get_username' className={style.backBtn}>
            <img src="/images/images/arrow.png" alt=""/>
        </div>
        <div className="text-center">
            <h1 style={{width: "100%", maxWidth: "200px", marginBottom: "1em"}}>Enter the code we have just sent you.</h1>
            <input type="text" 
            style={{width: "100%", textAlign: "center",border: "none",outline: "none"}}/>
            <p className="mt-2">Didn't recieve it? <span>Tap to resend</span></p>
        </div>
        <Link exact to="/allow_notification" className="primaryBtn d-flec align-items-center">
            Next  <img src="/images/images/nextArrowIcon.svg" alt="" className="ml-1"/>
        </Link>
    </div>
    );
   
}