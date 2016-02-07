import React from 'react'
import autobind from 'autobind-decorator'
import DefaultLayout from './DefaultLayout'

@autobind
class NotFound extends React.Component{

  static defaultProps = {
    title : 'Not Found'
  }

  render() {
    return (
      <DefaultLayout title={this.props.title}>
       	<h1>{this.props.title}</h1>
      </DefaultLayout>
    )
  }
}

export default NotFound