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
    headerMenu: [],
    pageNumber: 1,
    showPosts: 1
  }

  componentWillMount(){
    const { showPosts, pageNumber } = this.state
    wpPosts.getPosts(this, showPosts, pageNumber)
    wpPages.getPages(this)
    wpUsers.getUsers(this)
    wpMenu.getMenu(this, 'headerMenu')
  }

  changePage(direction = 'next', loadMore = false){
    const { showPosts } = this.state
    var pageNumber = this.state.pageNumber
    if(direction == 'prev'){
      pageNumber--
    } else {
      pageNumber++
    }
    this.setState({ pageNumber: pageNumber}, function(){
      wpPosts.getPosts(this, showPosts, pageNumber, loadMore)
    })
  }

  render() {
    const { posts, pages, users, headerMenu } = this.state
    return React.cloneElement(this.props.children, { posts: posts, pages: pages, users: users, headerMenu: headerMenu, changePage: this.changePage })
  }
}

module.exports = wpData