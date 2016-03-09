// Packages
import React from 'react'
import autobind from 'autobind-decorator'
import Formsy from 'formsy-react';
import { Input } from 'formsy-react-components';

// Functions
import gravityForms from './gravityForms'

@autobind
class GravityFormsEmail extends React.Component{

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
    const { id, inputs, label, type, defaultValue, placeholder, description, isRequired, cssClass } = field
    const { onChange } = this
    if(inputs){
      return (
        <div id={'field_'+formID+'_'+id} className={gravityForms.translateFormClass(cssClass)}>
          {showLabel && (
            <div>
              <label>{label}</label>
            </div>
          )}
          <div className="row">
            {inputs.map(function(field){
              return (
                <div key={field.id} className="col-xs-6">
                  <Input
                    layout={layout}
                    name={'input_'+gravityForms.stringReplace(field.id, '.', '_')}
                    id={'input_'+formID+'_'+gravityForms.stringReplace(field.id, '.', '_')}
                    value={defaultValue}
                    type={type}
                    placeholder={placeholder}
                    help={showLabel && (!validationMessage && isRequired ? field.label+" *" : field.label)}
                    validatePristine={validationMessage ? true : false}
                    required={validationMessage ? true : false}
                    onChange={onChange}
                  />
                </div>
              )
            })}
          </div>
        </div>
      )
    }
    return (
      <div id={'field_'+formID+'_'+id} className={gravityForms.translateFormClass(cssClass)}>
        <Input
          layout={layout}
          name={'input_'+id}
          id={'input_'+formID+'_'+id}
          value={defaultValue}
          type={type}
          label={showLabel && (!validationMessage && isRequired ? label+" *" : label)}
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

export default GravityFormsEmail