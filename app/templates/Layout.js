// Packages
import React from 'react'
import Helmet from "react-helmet"
import autobind from 'autobind-decorator'

// Functions
import helpers from '../lib/helpers'

// Views
import Header from './Header'

@autobind
class Layout extends React.Component {

  static defaultProps = {
    title: ''
  }

  render() {
    const { children, title, headerMenu, activeSlug, location } = this.props
    return (
      <div id="defaultLayout" className="appWrapper">
        <Helmet
          title={title}
          titleTemplate="%s | React Wordpress Theme Boilerplate"
        />        
        <div className="container">
          <Header headerMenu={headerMenu} activeSlug={activeSlug} location={location} />
          {children}
        </div>
      </div>
    )
  }
}

module.exports = Layout