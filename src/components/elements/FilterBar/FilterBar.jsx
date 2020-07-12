import React, { Component } from 'react'

import './FilterBar.scss'

export default class FilterBar extends Component {
    render() {

      let { category, handleSubmit, categoryChange } = this.props

      return (
        <div>
          <form onSubmit={handleSubmit}>
            <input name="searchField" type="text" placeholder="Search.." ref={ref => this.searchField = ref}/>
            <input type="submit" value="Submit"/>
          </form>
          <select value={category} onChange={categoryChange}>
            <option value="">Filter by Category</option>
            <option value="Events">Events</option>
            <option value="How-to">How-to</option>
            <option value="News">News</option>
            <option value="Community">Community</option>
            <option value="From Origin">From Origin</option>
          </select>
        </div>
      )
    }
}