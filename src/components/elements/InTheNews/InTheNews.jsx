import React, { Component } from 'react'

import './InTheNews.scss'
import ShortDescArticle from '../ShortDescArticle/ShortDescArticle'

export default class InTheNews extends Component {
  state = {
    newsInfo: [
      {category: 'food', title: 'Hello', text: 'lorem ipsum', image: './Footer.png', key:'1'},
      {category: 'whatever', title: 'Bye', text: 'lorem ipsum', image: './MainHeaderBackground.png', key:'2'},
      {category: 'okay', title: 'Hey-hey', text: 'lorem ipsum', image: './Footer.png', key:'3'},
      {category: 'interesting', title: 'Bye-bye', text: 'lorem ipsum', image: './MainHeaderBackground.png', key:'4'},
      {category: 'idontcare', title: 'Mkay', text: 'lorem ipsum', image: './Footer.png', key:'5'},
    ],
  }
    render() {
      return (
        <div className='InTheNews'>
           {this.state.newsInfo.map((article) => {
              return (
                <ShortDescArticle category={article.category} title={article.title} text={article.text} image={article.image} key={article.key} />
              );
            })}
        </div>
      )
    }
}