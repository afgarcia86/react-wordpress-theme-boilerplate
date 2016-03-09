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
    pageNumber: 1,
    showPosts: 1,
    posts: [],
    totalPosts: 0,
    totalPages: 0,
    pages: [],
    users: [],
    headerMenu: []
  }

  componentWillMount(){
    const { showPosts, pageNumber } = this.state
    wpPosts.getPosts(this, showPosts, pageNumber)
    wpPages.getPages(this)
    wpUsers.getUsers(this)
    wpMenu.getMenu(this, 'headerMenu')
  }

  changePageNumber(page, loadMore = false){
    const { showPosts } = this.state
    var pageNumber = this.state.pageNumber
    if(page == 'prev'){
      pageNumber--
    } else if(page == 'next') {
      pageNumber++
    } else {
      pageNumber = page
    }
    this.setState({ pageNumber: pageNumber}, function(){
      wpPosts.getPosts(this, showPosts, pageNumber, loadMore)
    })
  }

  render() {
    return React.cloneElement(this.props.children, { ...this.state, changePageNumber: this.changePageNumber })
  }
}

module.exports = wpData