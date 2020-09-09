import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";
import NewsPage from "../NewsPage/NewsPage";
import History from "../History/History";
import Article from "../Article/Article";
const Content = () => {
    return(
        <BrowserRouter>
                    <Header/>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/news" component={NewsPage} exact/>
                    <Route path="/history" component={History} exact/>
                    <Route path="/article" component={Article}/>
        </BrowserRouter>
    )
};

export default Content;