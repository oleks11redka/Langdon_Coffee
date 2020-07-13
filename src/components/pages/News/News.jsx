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
    window.scrollTo(0, 0);
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

      let { newsInfo, headers } = this.props
      let { search, category } = this.state

      return (
        <div className="news">
          {/* <Test newsInfo={newsInfo}/> */}
          <Header pageHeaderName='News' headers={headers} />
          <NewsLetter />
          <FilterBar search={search} category={category} handleSubmit={this.handleSubmit} categoryChange={this.categoryChange} ref={ref => this.childRef = ref} />
          <AllNewsArticlesPreview newsInfo={newsInfo} search={search} category={category} />
        </div>
      )
    }
}