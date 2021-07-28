import React from "react";
import style from '../style/welcome.module.css';
import { Link } from 'react-router-dom';



export default function Welcome(){
    return <div className={style.WelcomeContainer}>
         <h1>Welcome</h1>
         <div className={style.WelcomeInfo}>
             <p>
                 We have built in the Clubhouse feature into our app and are working hard to get it up and running.
             </p>
             <p>
                While we are working hard to get the final product done we would add people gradually to the app to make sure nothing breaks.
             </p>
             <p>INCEIT & the Development Team</p>
         </div>
         <div className= {style.actionBtn}>
             <Link exact to='/get_username' className='primaryBtn d-flex align-items-center mb-3'>
                  Get Your Username{" "}

             </Link>
             <Link>
             Have an invite? Sign In
             </Link>


         </div>
    </div>
}