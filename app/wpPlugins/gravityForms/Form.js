// Packages
import React from 'react'
import autobind from 'autobind-decorator'
import Formsy from 'formsy-react';
import FRC from 'formsy-react-components';

const {Checkbox, CheckboxGroup, Input, RadioGroup, Row, Select, File, Textarea} = FRC;

// Functions
import gravityForms from './gravityForms'

@autobind
class Form extends React.Component{

  state = {
    formData : null,
    layout: null,
    validatePristine: false,
  }

  static propTypes = {
    id: React.PropTypes.number.isRequired
  }

  componentDidMount(){
    var self = this
    gravityForms.getForm(this.props.id, function(formData){
      self.setState({
        formData : formData,
        layout : formData.labelPlacement == 'top_label' ? 'vertical' : 'horizontal'
      })
    })
  }

  render() {
    const { formData, layout, validatePristine } = this.state
    var sharedFormProps = {
      layout : layout,
      validatePristine: validatePristine
    }
    return (
      <div>
        {formData && (
          <Formsy.Form>
            <h3>{formData.title}</h3>
            <p>{formData.description}</p>
            {formData.fields.map(function(field){
              if(field.type == 'text' || field.type == 'email')
                return  <Input
                          {...sharedFormProps}
                          key={field.id}
                          name={  field.id}
                          id={"field_"+field.id}
                          value={field.defaultValue}
                          label={field.label}
                          type={field.type}
                          placeholder={field.placeholder}
                          help={field.description}
                          className={"form-control "+field.cssClass}
                          required={field.isRequired}
                        />
              else if(field.type == 'textarea')
                return <Textarea
                          {...sharedFormProps}
                          key={field.id}
                          name={field.id}
                          id={"field_"+field.id}
                          value={field.defaultValue}
                          label={field.label}
                          placeholder={field.placeholder}
                          help={field.description}
                          className={"form-control "+field.cssClass}
                          required={field.isRequired}
                          />
            })}
            <button className="btn btn-primary" formNoValidate={true} type="submit">{formData.button.text}</button>
          </Formsy.Form>
        )}
      </div>
    )
  }
}

export default Form