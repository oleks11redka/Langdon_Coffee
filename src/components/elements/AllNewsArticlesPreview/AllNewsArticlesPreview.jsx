import React, { Component } from 'react'

import './AllNewsArticlesPreview.scss'

import NewsArticle from '../NewsArticle/NewsArticle'

export default class AllNewsArticlesPreview extends Component {
    render() {

      let { newsInfo, search, category } = this.props

      return (
        <div className='allNewsArticlesPreview'>
           {newsInfo.map((article) => {
          if(((article.title.toLowerCase()).match(`${search.toLowerCase()}`) || (article.text.toLowerCase()).match(`${search.toLowerCase()}`)) && `${category}` === '') {
            return (
              <NewsArticle category={article.category} title={article.title} text={article.text} image={article.image} key={article.key} id={article.id} />
            );
          } if(article.category === (`${category}`) && ((article.title.toLowerCase()).match(`${search.toLowerCase()}`) || (article.text.toLowerCase()).match(`${search.toLowerCase()}`))) {
            return (
              <NewsArticle category={article.category} title={article.title} text={article.text} image={article.image} key={article.key} id={article.id} />
            );
          } if(article.category === (`${category}`) && `${search}` === '') {
            return (
              <NewsArticle category={article.category} title={article.title} text={article.text} image={article.image} key={article.key} id={article.id} />
            );
          } else {
            {newsInfo.map((article) => {
              return (
                <NewsArticle category={article.category} title={article.title} text={article.text} image={article.image} key={article.key} id={article.id} />
              );
            })}
          }
      })}
        </div>
      )
    }
}