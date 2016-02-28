// Packages
import React from 'react'
import Helmet from "react-helmet"
import autobind from 'autobind-decorator'

// Functions
import wpQuery from '../lib/wpQuery'
import helpers from '../lib/helpers'

// Views
import Header from './Header'

@autobind
class Layout extends React.Component {

  static defaultProps = {
    title: ''
  }

  render() {
    const { children, title, headerMenu, activeSlug } = this.props
    return (
      <div id="defaultLayout" className="appWrapper">
        <Helmet
          title={title}
          titleTemplate="%s | Wordpress React Starter"
        />        
        <div className="container">
          <Header headerMenu={headerMenu} activeSlug={activeSlug} />
          {children}
        </div>
      </div>
    )
  }
}

module.exports = Layout