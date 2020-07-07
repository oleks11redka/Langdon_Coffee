import React, { Component } from 'react'

import './SingleArticle.scss'

import ShortDescArticle from '../../elements/ShortDescArticle/ShortDescArticle';

export default class SingleArticle extends Component {
    render() {
        let { newsInfo, articleId } = this.props
      return (
        <div className='singleArticle'>
          <div className='singleArticle__filterBar'>
          </div>
        {newsInfo.map((article) => {
          if (article.id === `${articleId}`) {
            return (
              <ShortDescArticle category={article.category} title={article.title} text={article.text} image={article.image} key={article.key} id={article.id} />
            );
          }
            })}
        </div>
      )
    }
}