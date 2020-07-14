import React, { Component } from 'react'

import './FilterBar.scss'

export default class FilterBar extends Component {
    render() {

      let { search, category, handleSearch, categoryChange } = this.props

      return (
        <div className='filterBar'>
          <form className='filterBar__search'> 
            <input className='filterBar__search-field' name="searchField" type="text" placeholder="Search for news" value={search} onChange={handleSearch} />
            <img className='filterBar__search-button' src={require("./FilterBarPicture/search.svg")} alt="search logo"/>
          </form>
          <select className='filterBar__box' value={category} onChange={categoryChange}>
            <option className='filterBar__element' value="">Filter by Category</option>
            <option className='filterBar__element' value="Events">Events</option>
            <option className='filterBar__element' value="How-to">How-to</option>
            <option className='filterBar__element' value="News">News</option>
            <option className='filterBar__element' value="Community">Community</option>
            <option className='filterBar__element' value="From Origin">From Origin</option>
          </select>
        </div>
      )
    }
}