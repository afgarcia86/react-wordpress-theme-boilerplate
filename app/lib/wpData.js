// Packages
import React from 'react'
import autobind from 'autobind-decorator'

// Functions
import wpQuery from './wpQuery'

@autobind
class wpData extends React.Component {

  state = {
    posts: [],
    pages: []
  }

  componentWillMount(){
    var self = this
    wpQuery.getPosts(function(posts){
      self.setState({
        posts : posts
      })
    })
    wpQuery.getPages(function(pages){
      self.setState({
        pages : pages
      })
    })
  }  

  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, { posts: this.state.posts, pages: this.state.pages })}
      </div>
    )
  }
}

module.exports = wpData