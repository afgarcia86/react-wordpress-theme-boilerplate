// Packages
import React from 'react'
import autobind from 'autobind-decorator'
import { Input } from 'formsy-react-components'
import Formsy from 'formsy-react'

@autobind
class Search extends React.Component {

  static defaultProps = {
    query: '',
    placeholder: 'Search...',
    buttonText: React.PropTypes.string,
    showButton: true
  }

  static PropTypes = {
    query: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    buttonText: React.PropTypes.string,
    showButton: React.PropTypes.bool
  }

  static contextTypes = {
    router : React.PropTypes.object.isRequired
  }

  onValidSubmit(data){
    var query = data.query
    var router = this.context.router
    if (query !== "") {  // If something was entered
      router.push('/search/?s=' + query)
    }
  }

  render() {
    const { query, placeholder, showButton } = this.props

    return (
      <Formsy.Form ref="form" className="orm-inline pull-xs-right" onValidSubmit={this.onValidSubmit}>
        <Input
          layout="elementOnly"
          name="query"
          value={query}
          type="text"
          placeholder={placeholder}
          buttonAfter={showButton ? (<button className="btn btn-success-outline" type="submit">Search</button>) : null}
        />
      </Formsy.Form>
    )
  }
}

module.exports = Search