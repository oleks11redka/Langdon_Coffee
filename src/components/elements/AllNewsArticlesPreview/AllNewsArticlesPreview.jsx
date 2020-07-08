import React, { Component } from 'react'

import './AllNewsArticlesPreview.scss'

import NewsArticle from '../NewsArticle/NewsArticle'

export default class AllNewsArticlesPreview extends Component {
    render() {
      let { newsInfo } = this.props
      return (
        <div className='AllNewsArticlesPreview'>
           {newsInfo.map((article) => {
              return (
                <NewsArticle category={article.category} title={article.title} text={article.text} image={article.image} key={article.key} id={article.id} />
              );
            })}
        </div>
      )
    }
}