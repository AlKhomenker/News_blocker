import React from "react";
import Title from "../Title/Title";
import image from "../../assets/image.png";
import classes from "./article.module.css";

let storage = localStorage;

const Article = (props) => {
    let content,description,img;
        if(props.location.data.pass === undefined){
            let datas = JSON.parse(storage.getItem('arrayData'));
            content = datas.location.data.pass.props.content;
            description = datas.location.data.pass.props.description;
            img = datas.location.data.pass.props.image;
        }else {
            content = props.location.data.pass.props.content;
            description = props.location.data.pass.props.description;
            img = props.location.data.pass.props.image;
            storage.setItem('articleData',JSON.stringify(props));
    }

    return(
        <div className={classes.articleBlock}>
            <Title params = {props.location.data.pass} pageName = 'article'/>
            <img src={img} alt={image} className={classes.articleImg}/>
            <h6 className={classes.articleDiscription}>
                <span>{content}</span>
            </h6>
        </div>
    )
};

export default Article;