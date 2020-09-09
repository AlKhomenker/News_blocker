import React, {useEffect, useState} from "react";
import Title from "../Title/Title";
import classes from "./homePage.module.css";
import NewsItem from "../NewsItem/NewsItem";
import {NavLink} from "react-router-dom";

let url =  'http://newsapi.org/v2/top-headlines?country=us&apiKey=ed56a0da79064885ba1871d95f1eaeb6';
let arrayItems = [];

const HomePage = () => {

    const [todos, setTodos] = useState (arrayItems);

    useEffect(()=>{
        fetch(url)
            .then(response => response.json())
            .then(json => successRequest(json));
    },[]);

    const successRequest = (response) => {
        for (let i = 0; i < response.articles.length; i++){
            setTodos(response.articles);
        }
    };

   const items = todos.filter((item,index) => index < 6 ).map((item,index)=> {
       return (
           <NewsItem
               key = {item.index}
               title = {item.title}
               content = {item.content}
               source = {item.source.name}
               description = {item.description}
               date = {item.publishedAt}
               image = {item.urlToImage}
           />
       )
   });

    return(
        <div>
            <Title pageName = 'home'/>
            <div className={classes.newsBlock}>
                {items}

                <NavLink className={classes.aHomePage} to="/news">
                    Keeping up with the times</NavLink>
            </div>
        </div>
    )
};
export default HomePage;