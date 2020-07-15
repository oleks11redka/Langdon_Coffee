import React, { Component, Children } from 'react'

import './AllNewsArticlesPreview.scss'

import NewsArticle from '../NewsArticle/NewsArticle'

export default class AllNewsArticlesPreview extends Component {
  render() {

    let { newsInfo, search, category } = this.props

      return (
        // Нужно будет переделать через filter()
        <div className='allNewsArticlesPreview' id='doc'>
          {newsInfo.map((article) => {
            if(((article.title.toLowerCase()).match(`${search.toLowerCase()}`) || (article.text.toLowerCase()).match(`${search.toLowerCase()}`)) && `${category}` === '') {
              return <NewsArticle {...article} />
            } 
            
            if(article.category === (`${category}`) && ((article.title.toLowerCase()).match(`${search.toLowerCase()}`) || (article.text.toLowerCase()).match(`${search.toLowerCase()}`))) {
              return <NewsArticle {...article} />
            } 
            
            if(article.category === (`${category}`) && `${search}` === '') {
              return <NewsArticle {...article} />
            }
            
            else {
              {newsInfo.map((article) => {
                return <NewsArticle {...article} />
              })}
            }
          }
          )}
      </div>
    )
  }
}