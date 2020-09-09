import React, {useEffect, useState} from "react";
import NewsItem from "../NewsItem/NewsItem";
import classes from "./newsPage.module.css";
import Title from "../Title/Title";

let url =  'http://newsapi.org/v2/top-headlines?country=us&apiKey=ed56a0da79064885ba1871d95f1eaeb6';
let arrayItems = [];

const NewsPage = () => {
    const [todos, setTodos] = useState (arrayItems);

    useEffect(()=>{
        fetch(url)
            .then(response => response.json())
            .then(json => successRequest(json));
    },[]);

    const successRequest = (response) => {
        for (let i = 0; i < response.articles.length; i++){
            arrayItems.push(response.articles[i]);
            setTodos(response.articles);
        }
    };

    const items = todos.filter((item,index) => index < 18 ).map((item,index)=> {
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
            <Title pageName = 'news'/>
            <div className={classes.newsPageBlock}>
                    {items}
            </div>
        </div>
    )
};

export default NewsPage;