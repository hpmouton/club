import React, {useState} from 'react';
import style from '../style/phoneConfirm.module.css';
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";

export default function PhoneConfirmation(){
    const [value, setValue] = useState();

    return(
        <div className={style.phoneConfirmContainer}>
            <Link exact to="/" className={style.backBtn} >
                <img src="/images/images/arrow.png" alt="back" />
            </Link>

            <h1>Enter Your Number</h1>
            <PhoneInput international
            defaultCountry='NA' value={value} onChange={setValue}/>
            <p>By entering your number, you are agreeing to our <span>
                Terms & Conditions
                </span></p>

            <Link exact to="/code_confirm" className="primaryBtn d-flex align-items-center">
                Next  <img src="/images/images/nextArrowIcon.svg" alt="" className="ml-1"></img>
            </Link>
        </div>
    );
}
