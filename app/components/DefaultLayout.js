import React from 'react'
import Helmet from "react-helmet"
import autobind from 'autobind-decorator'
import { Link } from 'react-router'

@autobind
class DefaultLayout extends React.Component {

  static defaultProps = {
    title: ''
  }

  render() {
    return (
      <div id="defaultLayout" className="appWrapper">
        <Helmet
          title={this.props.title}
          titleTemplate="%s | Wordpress React Starter"
        />
        <nav className="navbar navbar-light bg-faded">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog/hello-world">Single Post</Link>
            </li>
            <li className="nav-item">
              <Link to="/sample-page">Page</Link>
            </li>
            <li className="nav-item">
              <Link to="/asdas">404</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

module.exports = DefaultLayout