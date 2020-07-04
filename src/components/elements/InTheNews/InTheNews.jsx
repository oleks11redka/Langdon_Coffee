import React, { Component } from 'react'

import './InTheNews.scss'
import ShortDescArticle from '../ShortDescArticle/ShortDescArticle'

export default class InTheNews extends Component {
    render() {
      return (
        <div className='InTheNews'>
           <ShortDescArticle />
        </div>
      )
    }
}