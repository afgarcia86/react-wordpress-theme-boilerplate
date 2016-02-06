import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

/*
 * Import Views
 */
import Index from './components/Index'
import Single from './components/Single'
import NotFound from './components/NotFound'

/*
 * Set Up Routes
 */
var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Index}/>
    <Route path="/post/:slug" component={Single}/>
    <Route path="*" component={NotFound} />
  </Router>
)

ReactDOM.render(routes, document.querySelector("#app"))