import React, { Component } from 'react'

import './InTheNews.scss'
import ShortDescArticle from '../ShortDescArticle/ShortDescArticle'

export default class InTheNews extends Component {
    render() {
      let { newsInfo } = this.props
      return (
        <div className='InTheNews'>
           {(newsInfo.slice(-4)).map((article) => {
              return (
                <ShortDescArticle category={article.category} title={article.title} text={article.text} image={article.image} key={article.key} />
              );
            })}
        </div>
      )
    }
}