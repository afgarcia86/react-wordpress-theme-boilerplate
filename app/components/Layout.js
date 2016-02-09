import React from 'react'
import Helmet from "react-helmet"
import autobind from 'autobind-decorator'
import { Link, Router } from 'react-router'
import request from 'superagent'

@autobind
class Layout extends React.Component {

  static defaultProps = {
    title: ''
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  state = {
    theTitle : '',
    theContent : ''
  }

  getPostData(requestUrl){
    var self = this
    request.get(requestUrl).end(function(err, res){
      if(err){
        console.log(err)
        return
      }
      var data = JSON.parse(res.text)
      if(data.length >= 1){
        self.setState({
          theTitle : data[0].title.rendered,
          theContent : data[0].content.rendered
        })
      } else {
        self.setState({
          theTitle : 'Not Found',
          theContent : 'hmm you better try something else'
        })
      }
    });

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
          {React.cloneElement(this.props.children, { getPostData: this.getPostData, theTitle: this.state.theTitle, theContent: this.state.theContent })}
        </div>
      </div>
    )
  }
}

module.exports = Layout