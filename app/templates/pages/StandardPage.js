// Packages
import React from 'react'
import autobind from 'autobind-decorator'

@autobind
class StandardPage extends React.Component{

  static props = {
    postData : {}
  }

  render() {
    const { postData } = this.props
    return (
      <div>
        <h1>{postData.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{__html: postData.content.rendered }} />      
      </div>
    )
  }
}

export default StandardPage