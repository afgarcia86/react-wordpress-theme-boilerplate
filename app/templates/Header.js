// Packages
import React from 'react'
import autobind from 'autobind-decorator'
import { Link } from 'react-router'

// Functions
import helpers from '../lib/helpers'

@autobind
class Header extends React.Component{

  static props = {
    headerMenu : []
  }

  render() {
    const { headerMenu, activeSlug } = this.props
    return (
      <nav className="navbar navbar-light bg-faded">
        <ul className="nav navbar-nav">
          {headerMenu.map(function(menuItem, i){
            var url = helpers.stringReplace(menuItem.url, 'http://l.wrs.com')
            var slug = helpers.slugify(menuItem.title)
            return (
              <li key={i} className={activeSlug == slug ? "active nav-item" : "nav-item"}>
                <Link className="nav-link" to={url}>{menuItem.title}</Link>
              </li>
            )}
          )}          
        </ul>
      </nav>
    )
  }
}

export default Header