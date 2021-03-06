import React, { Component } from 'react'

import './News.scss'

import AllNewsArticlesPreview from '../../elements/AllNewsArticlesPreview/AllNewsArticlesPreview'
import NewsLetter from '../../elements/NewsLetter/NewsLetter'
import FilterBar from '../../elements/FilterBar/FilterBar'
import Header from '../../elements/Header/Header'

export default class News extends Component {

  state = {
    search: '',
    category: ''
  }

  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Функция для onSubmit

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   this.setState({
  //     search: this.childRef.searchField.value
  //   })
  // }

  handleSearch = (event) => {
    event.preventDefault()
    this.setState({
      search: event.target.value
    })
  }

  categoryChange = (event) => {
    event.preventDefault()
    this.setState({
      category: event.target.value
    })
  }

    render() {

      let { newsInfo, headers } = this.props
      let { search, category } = this.state

      return (
        <div className="news">
          <Header pageHeaderName='News' headers={headers} />
          <NewsLetter />
          <FilterBar search={search} category={category} handleSearch={this.handleSearch} categoryChange={this.categoryChange}/>
          <AllNewsArticlesPreview newsInfo={newsInfo} search={search} category={category} />
        </div>
      )
    }
}