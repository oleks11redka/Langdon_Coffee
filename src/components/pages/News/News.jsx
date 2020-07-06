import React, { Component } from 'react'

import './News.scss'

import NewsArticlePreview from '../../elements/NewsArticlePreview/NewsArticlePreview'

export default class News extends Component {
    render() {
      let { newsInfo } = this.props
      return (
        <NewsArticlePreview newsInfo={newsInfo} />
      )
    }
}