import React, {useState} from "react";
import classes from "./newsItem.module.css"
import NewsTitle from "../NewsTitle/NewsTitle";
import {Link} from "react-router-dom";

const NewsItem = (props) => {

     let res = props.date.split("");
     let month = res.slice(5,7);
     let day = res.slice(8,10);

    return(
        <div className={classes.newsItemBlock}>
            <Link className={classes.navLinkHomePage}
                  to={{ pathname : '/article' , data: { pass: {props}} }}>
                <NewsTitle name ={props.title}/>
            </Link>
            <p className={classes.p}>{props.source}
                <span className={classes.span}>{month}</span>
                <span className={classes.spanBig }>{day} /</span>
            </p>
        </div>
    )
};

export default NewsItem;