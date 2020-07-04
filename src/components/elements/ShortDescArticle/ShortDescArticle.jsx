import React, { Component } from 'react'

import './ShortDescArticle.scss'

import Footer from './Footer.png'

export default class ShortDescArticle extends Component {
    state = {
        category: 'food',
        title: 'Hello',
        text: 'lorem ipsum',
        image: Footer,
    }

    render() {
        let { category, title, text, image } = this.state
      return (
        <div className='shortDescArticle'>
            <div className='shortDescArticle__photo' style={{backgroundImage: `url(${image})`}}>
                <p className='shortDescArticle__category'>{category}</p>
            </div>
            <div className='shortDescArticle__info'>
                <h2 className='shortDescArticle__title'>{title}</h2>
                <p className='shortDescArticle__text'>{text}</p>
                <button className='shortDescArticle__arrowButton'>
                    <svg></svg>
                </button>
            </div>
        </div>
      )
    }
}