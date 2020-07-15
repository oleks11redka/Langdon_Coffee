import React, { Component, Children } from 'react'

import './AllNewsArticlesPreview.scss'

import NewsArticle from '../NewsArticle/NewsArticle'

export default class AllNewsArticlesPreview extends Component {

  componentDidUpdate() {
    let doc = document.getElementById('oops')
    if(document.getElementById('doc').childNodes.length > 1) {
      return (doc.classList.add('oops-none'), doc.innerHTML = '')
    } else {
      return (doc.classList.remove('oops-none'), doc.innerHTML = 'No Such Articles Were Found :( Maybe try something else ?')
    }
  }

  searchSilmplifier = (searchedItem, searchInput) => {
    return (searchedItem.toLowerCase()).match(`${searchInput.toLowerCase().trim()}`)
  }

  categorySimplifier = (searchedCategory, categoryInput) => {
    return searchedCategory === (`${categoryInput}`)
  }

  defaultFilter = (filteredBy) => {
    return filteredBy === ''
  }
  
  render() {

    let { newsInfo, search, category } = this.props
    let { searchSilmplifier, categorySimplifier, defaultFilter } = this

      return (
        // Нужно будет переделать через filter()
        <div className='allNewsArticlesPreview' id='doc'>
          {newsInfo.map((article, i) => {
            if ((searchSilmplifier(article.title, search) || searchSilmplifier(article.text, search)) && defaultFilter(category)) {
              return <NewsArticle {...article} key={i} />
            } 
            
            if (categorySimplifier(article.category ,category) && (searchSilmplifier(article.title, search) || searchSilmplifier(article.text, search))) {
              return <NewsArticle {...article} key={i} />
            } 
            
            if (categorySimplifier(article.category ,category) && defaultFilter(search)) {
              return <NewsArticle {...article} key={i} />
            }
            
            else {
              {newsInfo.map((article, i) => {
                return <NewsArticle {...article} key={i} />
              })}
            }
          }
          )}
          <div id='oops' className='oops oops-none'></div>
      </div>
    )
  }
}