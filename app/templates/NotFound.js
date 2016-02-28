// Packages
import React from 'react'
import autobind from 'autobind-decorator'

// Functions
import helpers from '../lib/helpers'

// Views
import Layout from './Layout'

@autobind
class NotFound extends React.Component{

  static defaultProps = {
    title: 'Not Found'
  }  
  
  render() {    
    return (
      <Layout title={this.props.title}>
        <h1>Not Found!</h1>
        <p>Sorry but we can't find what you are looking for.</p>
      </Layout>
    )
  }
}

export default NotFound