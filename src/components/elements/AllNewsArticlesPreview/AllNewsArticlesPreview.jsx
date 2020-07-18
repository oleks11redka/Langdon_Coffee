import React, { Component, Children } from 'react'

import './AllNewsArticlesPreview.scss'

import NewsArticle from '../NewsArticle/NewsArticle'

export default class AllNewsArticlesPreview extends Component {

  state = {
    numberOfArticles: 8,
  }

  componentWillReceiveProps() {
    let showMoreButton = document.getElementById('show-more')

    this.setState({
      numberOfArticles: 8
    })

    showMoreButton.classList.remove('show-more--disabled')
  }
  
  componentDidUpdate() {
    let oopsAlert = document.getElementById('oops')
    let showMoreButton = document.getElementById('show-more')
    let previewLength = document.getElementById('doc').childNodes.length

    if(previewLength == 1) {
      oopsAlert.classList.remove('oops-none')
      showMoreButton.classList.add('show-more--disabled')
    }

    if(previewLength > 1) {
      oopsAlert.classList.add('oops-none')
    }

    if(previewLength > 1 && previewLength <= 8) {
      showMoreButton.classList.add('show-more--disabled')
    }
  }

  showMoreFunction = (filteredNumber) => {
    let showMoreButton = document.getElementById('show-more')
    let presentArticlesCount = this.state.numberOfArticles

    this.setState({
      numberOfArticles: presentArticlesCount + 4
    })

    if(presentArticlesCount >= filteredNumber - 4) {
      showMoreButton.classList.add('show-more--disabled')
    }
  }
  
  render() {
    let { newsInfo, search, category } = this.props
    let { numberOfArticles } = this.state

    let filteredNews = newsInfo.filter((article) => {

      let searchSilmplifier = (searchedItem, searchInput) => {
        return (searchedItem.toLowerCase()).match(`${searchInput.toLowerCase().trim()}`)
      }
    
      let categorySimplifier = (searchedCategory, categoryInput) => {
        return searchedCategory === (`${categoryInput}`)
      }

      if(search !== '' && category !== '') {
        return ((searchSilmplifier(article.title, search) || searchSilmplifier(article.text, search)) && categorySimplifier(article.category ,category))
      } if (search !== '' && category === '') {
        return (searchSilmplifier(article.title, search) || searchSilmplifier(article.text, search))
      } if (search === '' && category !== '') {
        return categorySimplifier(article.category ,category)
      } if (search === '' && category === '') {
        return  newsInfo
      }
    })

    let news = filteredNews.reverse().slice(0, numberOfArticles).map((article, i) => {
      return <NewsArticle {...article} key={i} />
    })

      return (
        <div className='allNewsArticlesPreview__wrapper'>
          <div className='allNewsArticlesPreview' id='doc'>
              {news}
            <div id='oops' className='allNewsArticlesPreview__oops oops-none'>No Such Articles Were Found :&#40; Maybe try something else ?</div>
          </div>
          <div className='allNewsArticlesPreview__button-wrapper'>
            <button className='allNewsArticlesPreview__show-more' id='show-more' onClick={() => this.showMoreFunction(filteredNews.length, search, category)}>Show More</button>
          </div>
        </div>
    )
  }
}