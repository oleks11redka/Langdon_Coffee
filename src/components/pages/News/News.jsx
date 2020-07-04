import React, { Component } from 'react'

import './News.scss'

import ShortDescArticle from '../../elements/ShortDescArticle/ShortDescArticle'

export default class News extends Component {
    render() {
      return (
        <div className='news'>
            <ShortDescArticle />
        </div>
      )
    }
}