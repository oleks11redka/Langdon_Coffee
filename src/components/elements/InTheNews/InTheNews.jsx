import React, { Component } from 'react'

import './InTheNews.scss'

import NewsArticle from '../NewsArticle/NewsArticle'

export default class InTheNews extends Component {
    render() {
      let { newsInfo } = this.props
      return (
        <div className='InTheNews'>
           {(newsInfo.slice(-4)).map((article) => {
              return (
                <NewsArticle {...article} />
              );
            })}
        </div>
      )
    }
}