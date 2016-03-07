// Packages
import React from 'react'
import autobind from 'autobind-decorator'

@autobind // use this to autobind "this" when passing in props
class Alert extends React.Component {

  static defaultProps = {
    className : 'alert',
    alertClass : 'alert-success',
    boldText: '',
    text: ''
  }

  static propTypes = {
    text: React.PropTypes.string.isRequired
  }

  render() {

    const { alertClass, ...props } = this.props
    props.className += ` ${alertClass}`

    return (
      <div className={props.className} role="alert">
        <button type="button" className="close" onClick={this.props.onClick}>
          <span aria-hidden="true">&times;</span>
        </button>
        <strong>{this.props.boldText}</strong> {this.props.text}
      </div>
    )
  }
}

export default Alert