import React from "react";
import classes from "./footer.module.css"

const Footer = () => {
    return(
        <div className={classes.footer}>
            <div className="align-self-center">
                <ul className={classes.ulFooter}>
                    <li className="d-flex flex-column bd-highlight mb-2">
                        <h6 className={classes.h6Footer1}>News Blocker</h6>
                        <span className={classes.spanFooter}>Single Page Application</span>
                    </li>
                    <li className="d-flex flex-column bd-highlight mb-2">
                        <h6 className={classes.h6Footer}> </h6>
                        <span className={classes.spanFooter}>All rights reserved by News Blocker 2020</span>
                    </li>
                    <li className="d-flex flex-column bd-highlight">
                        <span className={classes.spanFooter}>Made by NB team and</span>
                        <h6 className={classes.h6Footer1}>Alina Khomenker</h6></li>
                </ul>
            </div>
        </div>

    )
};

export default Footer;