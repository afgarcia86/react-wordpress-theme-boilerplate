import React from 'react'
import autobind from 'autobind-decorator'
import DefaultLayout from './DefaultLayout'

@autobind
class Index extends React.Component{

  static defaultProps = {
    title : 'Index Page'
  }

  render() {
    return (
       <DefaultLayout title={this.props.title}>{this.props.title}</DefaultLayout>
    )
  }
}

export default Index