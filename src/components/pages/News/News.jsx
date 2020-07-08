import React, { Component } from 'react'

import './News.scss'

import AllNewsArticlesPreview from '../../elements/AllNewsArticlesPreview/AllNewsArticlesPreview'
import NewsLetter from '../../elements/NewsLetter/NewsLetter'

export default class News extends Component {
    render() {
      let { newsInfo } = this.props
      return (
        <div className="News">
          <NewsLetter />
          <AllNewsArticlesPreview newsInfo={newsInfo} />
        </div>
      )
    }
}