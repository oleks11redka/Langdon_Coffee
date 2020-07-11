import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

import './NewsArticle.scss'

class NewsArticle extends Component {
    render() {
        let { category, title, text, image, history, id } = this.props
        let requiredImage = require(`${image}`)
        
      return (
        <div className='NewsArticle'>
            <div className='NewsArticle__photo' style={{ backgroundImage: `url(${requiredImage})` }}>
                <p className='NewsArticle__category'>{category}</p>
            </div>
            <div className='NewsArticle__info'>
                <h2 className='NewsArticle__title'>{title}</h2>
                <p className='NewsArticle__text'>{text}</p>
            </div>
            <button onClick={() => {
                    history.push('/news/' + id)
                }}>Show</button>
        </div>
      )
    }
}

export default withRouter(NewsArticle)