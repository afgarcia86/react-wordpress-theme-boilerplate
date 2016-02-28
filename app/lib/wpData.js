// Packages
import React from 'react'
import autobind from 'autobind-decorator'

// Functions
import wpQuery from './wpQuery'
import wpMenu from './wpMenu'

@autobind
class wpData extends React.Component {

  state = {
    posts: [],
    pages: [],
    headerMenu: []
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
    wpMenu.getMenu('header-menu', function(menuItems){
      self.setState({
        headerMenu : menuItems
      })
    })
  }  

  render() {
    const { posts, pages, headerMenu } = this.state
    return React.cloneElement(this.props.children, { posts: posts, pages: pages, headerMenu: headerMenu })
  }
}

module.exports = wpData