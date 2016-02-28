import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

/*
 * Import Views
 */
import wpData from './lib/wpData'
import Index from './templates/Index'
import Single from './templates/Single'
import Page from './templates/Page'

/*
 * Set Up Routes
 */
var routes = (
  <Router history={browserHistory}>
  	<Route path="/" component={wpData}>
	    <IndexRoute component={Index}/>
	    <Route path=":slug" component={Page}/>
	    <Route path="blog/:slug" component={Single}/>
	  </Route>
  </Router>
)

ReactDOM.render(routes, document.querySelector("#app"))