import React, { Component } from 'react'

import './News.scss'

import AllNewsArticlesPreview from '../../elements/AllNewsArticlesPreview/AllNewsArticlesPreview'
import NewsLetter from '../../elements/NewsLetter/NewsLetter'
import FilterBar from '../../elements/FilterBar/FilterBar'

export default class News extends Component {

  state = {
    search: '',
    category: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      search: this.childRef.searchField.value
    })
    console.log(this.childRef.searchField.value)
  }

  categoryChange = (event) => {
    event.preventDefault()
    this.setState({
      category: event.target.value
    })
    console.log(event.target.value)
  }

    render() {

      let { newsInfo } = this.props
      let { search, category } = this.state

      return (
        <div className="News">
          {/* <Test newsInfo={newsInfo}/> */}
          <NewsLetter />
          <FilterBar search={search} category={category} handleSubmit={this.handleSubmit} categoryChange={this.categoryChange} ref={ref => this.childRef = ref} />
          <AllNewsArticlesPreview newsInfo={newsInfo} search={search} category={category} />
        </div>
      )
    }
}