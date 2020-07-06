import React, { Component } from 'react'
import { Link } from "react-router-dom";

import './ShortDescArticle.scss'

export default class ShortDescArticle extends Component {
    render() {
        let { category, title, text, image, id } = this.props
        let requiredImage = require(`${image}`)
      return (
        <div className='shortDescArticle'>
            <div className='shortDescArticle__photo' style={{ backgroundImage: `url(${requiredImage})` }}>
                <p className='shortDescArticle__category'>{category}</p>
            </div>
            <div className='shortDescArticle__info'>
                <h2 className='shortDescArticle__title'>{title}</h2>
                <p className='shortDescArticle__text'>{text}</p>
      <button className='shortDescArticle__arrowButton'>More {id}</button>
            </div>
        </div>
      )
    }
}