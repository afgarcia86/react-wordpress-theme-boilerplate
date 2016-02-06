import React from 'react'
import autobind from 'autobind-decorator'
import DefaultLayout from './DefaultLayout'

@autobind
class Single extends React.Component{

  static defaultProps = {
    title : 'Single Post'
  }

  render() {
    return (
       <DefaultLayout title={this.props.title}>{this.props.title}</DefaultLayout>
    )
  }
}

export default Single