import React from "react";
import classes from "./newsTitle.module.css"

const NewsTitle = (props) => {
    return(
        <div>
            <h6 className={classes.h6}>{props.name}</h6>
        </div>
    )
};

export default NewsTitle;