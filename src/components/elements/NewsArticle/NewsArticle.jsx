import React, { Component } from 'react'
import { withRouter, Link } from "react-router-dom";

import './NewsArticle.scss'

class NewsArticle extends Component {
    render() {
        let { category, title, text, image, history, id, fullScreen } = this.props
        let requiredImage = require(`${image}`)
        let news

        if (fullScreen) {
            news = (
            <div className='singleNewsArticle'>
                <div className='singleNewsArticle__links'><Link to="/">HOME</Link> / <Link to="/news">NEWS</Link> / <span className='singleNewsArticle__grey-title'>{title}</span></div>
                <h2 className='singleNewsArticle__title'>{title}</h2>
                <p className={`singleNewsArticle__category newsArticle__category--${category.split(' ').join('').toLowerCase()}`}>{category}</p>
                <div className='singleNewsArticle__photo' style={{ backgroundImage: `url(${requiredImage})` }}></div>
                <p className='singleNewsArticle__text'>{text}</p>
                <button className='singleNewsArticle__button' onClick={() => {
                    history.push('/news');
                }}>Go Back To All News</button>
            </div>
            )
        } else {
            news = (
            <div className='newsArticle'>
                <div className='newsArticle__photo' style={{ backgroundImage: `url(${requiredImage})` }}>
                    <p className={`newsArticle__category newsArticle__category--${category.split(' ').join('').toLowerCase()}`}>{category}</p>
                </div>
                <div className='newsArticle__main'>
                    <div className='newsArticle__info'>
                        <h2 className='newsArticle__title'>{title}</h2>
                        <p className='newsArticle__text'>{text}</p>
                    </div>
                    <button className='newsArticle__button' onClick={() => {
                        history.push('/news/' + id)
                    }}> <img className='newsArticle__button-img' src={require("./NewsArticlePictures/long-arrow-alt-right.svg")} alt="button show more" />
                    </button>
                </div>
            </div>)
        }

        return (
            <div className='newsArticleWrapper'>
                {news}
            </div>
        )
    }
}

export default withRouter(NewsArticle)