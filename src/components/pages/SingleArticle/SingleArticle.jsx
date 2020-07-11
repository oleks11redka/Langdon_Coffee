import React, { Component } from 'react'

import './SingleArticle.scss'

import NewsArticle from '../../elements/NewsArticle/NewsArticle';

export default class SingleArticle extends Component {
    render() {
        let { newsInfo, articleId } = this.props
      return (
        <div className='singleArticle container'>
        {newsInfo.map((article) => {
          if (article.id === `${articleId}`) {
            return (
              <NewsArticle category={article.category} title={article.title} text={article.text} image={article.image} key={article.key} id={article.id} />
            );
          }
        })}
        </div>
      )
    }
}