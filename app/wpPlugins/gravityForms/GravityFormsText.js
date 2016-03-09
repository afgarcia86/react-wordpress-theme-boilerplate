// Packages
import React from 'react'
import autobind from 'autobind-decorator'
import Formsy from 'formsy-react';
import { Input } from 'formsy-react-components';
//Checkbox, CheckboxGroup, , RadioGroup, Row, Select, File, Textarea

// Functions
import gravityForms from './gravityForms'

@autobind
class GravityFormsText extends React.Component{

  static defaultProps = {
    showLabel: true,
    field: {}
  }

  static propTypes = {
    showLabel: React.PropTypes.bool.isRequired,
    field: React.PropTypes.object.isRequired,
    layout: React.PropTypes.string.isRequired,
    formID: React.PropTypes.number.isRequired,
    validationMessages: React.PropTypes.string
  }

  onChange(name, value){
    if(typeof jQuery != undefined){
      jQuery(document).trigger('gform_post_render', [this.props.formID])
    }
  }

  render(){
  	const { formID, field, layout, showLabel, validationMessage } = this.props
    const { id, label, type, defaultValue, placeholder, description, isRequired, cssClass } = field
    const { onChange } = this
    return (
      <div id={'field_'+formID+'_'+id} className={gravityForms.translateFormClass(cssClass)}>
        <Input
          layout={layout}
          name={'input_'+id}
          id={'input_'+formID+'_'+id}
          value={defaultValue}
          label={showLabel && (!validationMessage && isRequired ? label+" *" : label)}
          type={type}
          placeholder={placeholder}
          help={validationMessage ? validationMessage : description}
          validatePristine={validationMessage ? true : false}
          required={validationMessage ? true : false}
          onChange={onChange}
        />
      </div>
    )
  }
}

export default GravityFormsText