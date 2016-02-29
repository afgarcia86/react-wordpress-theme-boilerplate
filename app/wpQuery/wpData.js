// Packages
import React from 'react'
import autobind from 'autobind-decorator'

// Functions
import wpPosts from './wpPosts'
import wpPages from './wpPages'
import wpUsers from './wpUsers'
import wpMenu from './wpMenu'

@autobind
class wpData extends React.Component {

  state = {
    posts: [],
    pages: [],
    users: [],
    headerMenu: []
  }

  componentWillMount(){
    var self = this
    wpPosts.getPosts(function(posts){
      self.setState({
        posts : posts
      })
    })
    wpPages.getPages(function(pages){
      self.setState({
        pages : pages
      })
    })
    wpUsers.getUsers(function(users){
      self.setState({
        users : users
      })
    })
    wpMenu.getMenu('header-menu', function(menuItems){
      self.setState({
        headerMenu : menuItems
      })
    })
  }  

  render() {
    const { posts, pages, users, headerMenu } = this.state
    return React.cloneElement(this.props.children, { posts: posts, pages: pages, users: users, headerMenu: headerMenu })
  }
}

module.exports = wpData