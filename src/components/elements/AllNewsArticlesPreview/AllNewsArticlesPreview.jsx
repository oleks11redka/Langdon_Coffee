import React, { Component, Children } from 'react'

import './AllNewsArticlesPreview.scss'

import NewsArticle from '../NewsArticle/NewsArticle'

export default class AllNewsArticlesPreview extends Component {

  state = {
    numberOfArticles: 8,
    showMore: true
  }

  componentDidUpdate() {
    let doc = document.getElementById('oops')

    if(document.getElementById('doc').childNodes.length > 2) {
      doc.classList.add('oops-none')
    } else {
      doc.classList.remove('oops-none')
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

  showMore = (count) => {
    let button = document.getElementById('show-more')
    let previewLength = document.getElementById('doc').childNodes.length
    console.log(previewLength)

    if (previewLength >= 1 + count) {
      console.log(count)
      this.setState({
        numberOfArticles: this.state.numberOfArticles + 4,
      })
    } else {
      button.classList.add('show-more--disabled')
    }
  }
  
  render() {

    let { newsInfo, search, category } = this.props
    let { numberOfArticles } = this.state
    let { searchSilmplifier, categorySimplifier, defaultFilter } = this
    
      return (
        <div className='allNewsArticlesPreview__wrapper'>
          <div className='allNewsArticlesPreview' id='doc'>
          
          {newsInfo.slice(0, numberOfArticles).map((article, i) => {
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
              {newsInfo.slice(0, numberOfArticles).map((article, i) => {
                return <NewsArticle {...article} key={i} />
              })}
            }
          }
          )}
          <div id='oops' className='oops oops-none'>No Such Articles Were Found :( Maybe try something else ?</div>
      </div>
          <button className='show-more' id='show-more' onClick={() => this.showMore(numberOfArticles)}>Show More</button>
        </div>
    )
  }
}