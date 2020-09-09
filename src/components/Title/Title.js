import React from "react";
import classes from "./title.module.css"
import titels from "./titelsData";
import NewsTitle from "../NewsTitle/NewsTitle";

const getLastWord = (data) =>{
    let array = data.split(' ');
    let newStr = array.slice(0,array.length-1).join(' ');
    let lastWord = array[array.length-1];
       return [newStr,lastWord];
};

const Title = (props) => {
    let arr = [];
    switch(props.pageName) {
        case 'home':
            arr = getLastWord(titels.home[0].p1);
            return (
                <div className={classes.title}>
                    <h1>{arr[0]}</h1>
                    <h1 className={classes.h1Title}>{arr[1]}</h1>
                </div>);
        case 'news':
            arr = getLastWord(titels.news[0].p1);
            return (
                <div className={classes.title}>
                    <h1>{arr[0]}</h1>
                    <h1 className={classes.h1Title}>{arr[1]}</h1>
                </div>);
        case 'article':
            arr = getLastWord(props.params.props.title);
            let res = props.params.props.date.split("");
            let month = res.slice(5,7);
            let day = res.slice(8,10);
            let source = props.params.props.source;

            return (
                <div className={classes.title}>
                    <h1>{arr[0]}</h1>
                    <h1 className={classes.h1Title}>{arr[1]}</h1>
                    <p className={classes.p}>{source}<br/>
                        <span className={classes.span}>{month}/</span>
                        <span className={classes.spanBig }>{day}</span>
                    </p>
                </div>);
        case 'history':
            let title = titels.history[0].p1;
            let historyTeam = titels.history[0].historyTeam;
            let additional = titels.history[0].additional;
            let options = titels.history[0].newOptions;
            let profession = titels.history[0].profession;
            return (
                <div className={classes.title}>
                    <h1 className={classes.h1Title}>{title}</h1>
                    <div className={classes.historyTeam}>
                        <div> {historyTeam[0]}</div>
                        <div> {historyTeam[1]}</div>
                    </div>

                    <p className={classes.pTitleBlack}>{additional}</p>
                    <p className={classes.pTitleBlack}>{options[0]}</p>
                    <p className={classes.pTitleBlack}>{options[1]}</p>
                    <p className={classes.pTitleBlack}>{options[2]}</p>

                    <p className={classes.pTitle}>{profession}</p>
                </div>);
        default:
            return '';
    }
};

export default Title;