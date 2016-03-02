// Packages
import React from 'react'
import autobind from 'autobind-decorator'

// Functions
import gravityForms from '../../wpQuery/gravityForms'

@autobind
class FormPage extends React.Component{

  state = {
    formData : null
  }

  static props = {
    postData : {}
  }

  componentDidMount(){
    var self = this
    gravityForms.getForm(1, function(formData){
      self.setState({
        formData : formData
      })
    })
  }

  render() {
    const { postData } = this.props
    return (
      <div>
        <h1>{postData.title.rendered} - FORM!!</h1>
        <div dangerouslySetInnerHTML={{__html: postData.content.rendered }} />      
      </div>
    )
  }
}

export default FormPage