import React, { Component } from 'react'

import './SingleArticle.scss'

import NewsArticle from '../../elements/NewsArticle/NewsArticle';
import Header from '../../elements/Header/Header';

export default class SingleArticle extends Component {

  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } 
  
    render() {
        let { newsInfo, articleId, headers } = this.props
      return (
        <div className='singleArticle '>
          <Header pageHeaderName='News' headers={headers} />
          <div className='container'>
          {newsInfo.map((article, i) => {
            if (`id=${article.id}&title=${article.title}` === `${articleId}`) {
              return (
                <NewsArticle {...article} key={i} fullScreen />
              );
            }
          })}
          </div>
        </div>
      )
    }
}