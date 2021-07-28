import React from "react";
import Header from "../components/header"
import dailyInfoCard from "../components/dailyInfoCard";

import style from "../style/home.module.css";

export default function home(){
    return <>
    <Header />
    <div className={style.homeContainer}>
     <dailyInfoCard/>
    </div>
    </>
    
}