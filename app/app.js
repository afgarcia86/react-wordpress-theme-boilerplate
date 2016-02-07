import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

/*
 * Import Views
 */
import Index from './components/Index'
import Single from './components/Single'

/*
 * Set Up Routes
 */
var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Index}/>
    <Route path=":slug" component={Single}/>
  </Router>
)

ReactDOM.render(routes, document.querySelector("#app"))