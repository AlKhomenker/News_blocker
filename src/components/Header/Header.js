import React, {useState} from "react";
import classes from "./header.module.css"
import {NavLink} from "react-router-dom";
import logo from '../../assets/logo.png'
let currentUrl = window.location.href.split("/").splice(-1).toString();
const Header = () => {

    const [url,setUrl] = useState(currentUrl);

    const getCurrentUrl = () =>{
        setTimeout(function(){
            currentUrl = window.location.href.split("/").splice(-1).toString();
            setUrl(currentUrl);
            console.log(currentUrl);
        }, 100);
    };
    const openAlert = () =>{
      alert('Sorry, but we are in the process of development. Thanks for your understanding');
    };
    return(
        <div className={classes.header}>
            <ul className={classes.ulHeader}>
                <li className={classes.disable} onClick={openAlert}>Chat</li>
                <li className={classes.disable} onClick={openAlert}>Dispute</li>

                <li><h6 className={classes.h6Header}>
                    <img src={logo} alt='logo' className={classes.logo}/> </h6></li>

                <li><NavLink className={(url === 'history')?(classes.aHeader_active):(classes.aHeader)}
                             to="/history" onClick={getCurrentUrl}>
                    History</NavLink></li>

                <li><NavLink className={(url === 'news')?(classes.aHeader_active):(classes.aHeader)}
                             to="/news" onClick={getCurrentUrl}>News</NavLink></li>

                <li><NavLink className={(url === '')?(classes.aHeader_active):(classes.aHeader)}
                             to="/" onClick={getCurrentUrl}>Home</NavLink></li>

            </ul>
        </div>

    )
};

export default Header;