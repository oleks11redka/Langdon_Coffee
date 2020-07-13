import React, { Component } from 'react'

import './SingleArticle.scss'

import NewsArticle from '../../elements/NewsArticle/NewsArticle';
import Header from '../../elements/Header/Header';

export default class SingleArticle extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  } 
  
    render() {
        let { newsInfo, articleId, headers } = this.props
      return (
        <div className='singleArticle '>
          <Header pageHeaderName='News' headers={headers} />
          <div className='container'>
          {newsInfo.map((article) => {
            if (article.id === `${articleId}`) {
              return (
                <NewsArticle category={article.category} title={article.title} text={article.text} image={article.image} key={article.key} id={article.id} fullScreen />
              );
            }
          })}
          </div>
        </div>
      )
    }
}