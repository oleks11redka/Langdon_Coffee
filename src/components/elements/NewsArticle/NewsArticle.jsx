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
                <button className='singleNewsArticle__button' onClick={() => {history.push('/news')}}>
                    <svg className='singleNewsArticle__button-arrow' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.7841 19.875H27.9375C28.2482 19.875 28.5 19.6232 28.5 19.3125V16.6875C28.5 16.3769 28.2482 16.125 27.9375 16.125H13.7841V13.966C13.7841 12.9637 12.5723 12.4618 11.8635 13.1705L7.82952 17.2045C7.39016 17.6439 7.39016 18.3562 7.82952 18.7955L11.8635 22.8295C12.5722 23.5382 13.7841 23.0363 13.7841 22.034V19.875Z"/>
                    </svg>
                    <p className='singleNewsArticle__button-text'>Go Back To All News</p>
                </button>
            </div>
            )
        } else {
            news = (
            <div className='newsArticle' onClick={() => {history.push('/news/' + id)}}>
                <div className='newsArticle__photo' style={{ backgroundImage: `url(${requiredImage})` }}>
                    <p className={`newsArticle__category newsArticle__category--${category.split(' ').join('').toLowerCase()}`}>{category}</p>
                </div>
                <div className='newsArticle__main'>
                    <div className='newsArticle__info'>
                        <h2 className='newsArticle__title'>{title}</h2>
                        <p className='newsArticle__text'>{text}</p>
                    </div>
                    <button className='newsArticle__button'>
                        <svg className='newsArticle__button-arrow' viewBox="0 0 22 12" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.216 4.12511H1.0625C0.751859 4.12511 0.5 4.37697 0.5 4.68761V7.31261C0.5 7.62325 0.751859 7.87511 1.0625 7.87511H15.216V10.0341C15.216 11.0364 16.4277 11.5383 17.1365 10.8296L21.1705 6.79562C21.6099 6.35626 21.6099 5.64395 21.1705 5.20464L17.1365 1.17062C16.4278 0.461919 15.216 0.963856 15.216 1.96614V4.12511Z"/>
                        </svg>
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