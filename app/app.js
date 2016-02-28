import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

/*
 * Import Views
 */
import wpData from './lib/wpData'
import Index from './templates/Index'
import Single from './templates/Single'
import FrontPage from './templates/FrontPage'
import Page from './templates/Page'
import NotFound from './templates/NotFound'

/*
 * Set Up Routes
 */
var routes = (
  <Router history={browserHistory}>
  	<Route path="/" component={wpData}>
  		<IndexRoute component={FrontPage}/>	    
	    <Route path="blog">
	    	<IndexRoute component={Index}/>
	    	<Route path=":slug" component={Single}/>
	    </Route>
	    <Route path=":slug" component={Page}/>
	    <Route path="*" component={NotFound}/>
	  </Route>
  </Router>
)

ReactDOM.render(routes, document.querySelector("#app"))