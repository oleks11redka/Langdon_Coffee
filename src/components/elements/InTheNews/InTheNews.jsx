import React, { Component } from 'react'

import './InTheNews.scss'

import NewsArticle from '../NewsArticle/NewsArticle'

export default class InTheNews extends Component {
    render() {
      let { newsInfo } = this.props
      return (
        <div className='InTheNews'>
           {(newsInfo.reverse().slice(0, 4)).map((article, i) => {
              return (
                <NewsArticle {...article} key={i} />
              );
            })}
        </div>
      )
    }
}