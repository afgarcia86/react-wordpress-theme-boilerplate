// Packages
import React from 'react'
import autobind from 'autobind-decorator'

// Views
import Form from '../../wpPlugins/gravityForms/Form'

@autobind
class FormPage extends React.Component{

  static props = {
    postData : {}
  }

  render() {
    const { postData } = this.props
    return (
      <div>
        <h1>{postData.title.rendered} - FORM!!</h1>
        <div dangerouslySetInnerHTML={{__html: postData.content.rendered }} />  
        <Form id={1} showLabels={true} showTitle={false} />    
      </div>
    )
  }
}

export default FormPage