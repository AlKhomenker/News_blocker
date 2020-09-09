import React from "react";
import Title from "../Title/Title";
import image from "../../assets/image.png";
import classes from "./history.module.css";

const History = () => {
    return(
            <div className={classes.historyBlock}>
                <Title pageName = 'history'/>
                <img src={image} alt={image} className={classes.historyImg}/>
            </div>
    )
};

export default History;