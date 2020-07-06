import React, { Component } from 'react'

import './SingleArticle.scss'

export default class SingleArticle extends Component {
    render() {
        let { category, title, text, image } = this.props
        let requiredImage = require(`${image}`)
      return (
        <div className='SingleArticle'>
            <div className='SingleArticle__photo' style={{ backgroundImage: `url(${requiredImage})` }}>
                <p className='SingleArticle__category'>{category}</p>
            </div>
            <div className='SingleArticle__info'>
                <h2 className='SingleArticle__title'>{title}</h2>
                <p className='SingleArticle__text'>{text}</p>
                <button className='SingleArticle__arrowButton'>
                    <svg></svg>
                </button>
            </div>
        </div>
      )
    }
}