import React, { Component } from 'react'

import './NewsArticlePreview.scss'
import ShortDescArticle from '../ShortDescArticle/ShortDescArticle'

export default class NewsArticlePreview extends Component {
    render() {
      let { newsInfo } = this.props
      return (
        <div className='NewsArticlePreview'>
           {newsInfo.map((article) => {
              return (
                <ShortDescArticle category={article.category} title={article.title} text={article.text} image={article.image} key={article.key} id={article.id} />
              );
            })}
        </div>
      )
    }
}