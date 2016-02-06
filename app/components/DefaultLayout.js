import React from 'react'
import Helmet from "react-helmet"
import autobind from 'autobind-decorator'

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
        <div id="wrapper" className={this.state.toggled ? "toggled" : ""}>
          <div id="page-content-wrapper">            
            <div className="container-fluid">
              <h1>{this.props.title}</h1>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = DefaultLayout