import React, { Component } from 'react'

import './SingleArticle.scss'

import NewsArticle from '../../elements/NewsArticle/NewsArticle';
import Header from '../../elements/Header/Header';

export default class SingleArticle extends Component {
    render() {
        let { newsInfo, articleId, headers } = this.props
      return (
        <div className='singleArticle container'>
        <Header pageHeaderName='News' headers={headers} />
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