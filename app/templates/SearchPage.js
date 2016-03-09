// Packages
import React from 'react'
import autobind from 'autobind-decorator'
import { Link } from 'react-router'

// Functions
import helpers from '../lib/helpers'
import wpPosts from '../wpQuery/wpPosts'

// Views
import Layout from './Layout'
import PostsNavigation from '../lib/PostsNavigation'

@autobind
class SearchPage extends React.Component{

  state = {
    pageNumber: 1,
    showPosts: 1,
    totalPosts: 0,
    totalPages: 0,
    posts : [],
    activeSlug: 'blog'
  }

  componentWillMount(){
    const { showPosts, pageNumber } = this.state
    var location = this.props.location
    if(location.query){
      var query = location.query.s
      wpPosts.searchPosts(this, query, showPosts, pageNumber)
    }
  }

  componentWillUpdate(nextProps, nextState){
    if(nextProps.location != this.props.location){
      var location = nextProps.location
      this.setState({
        pageNumber: 1
      })
      if(location.query){
        const { showPosts } = nextState
        var query = location.query.s
        wpPosts.searchPosts(this, query, showPosts, 1, false)
      }
    }
  }

  changePageNumber(page, loadMore = false){
    const { showPosts } = this.state
    var location = this.props.location
    if(location.query){
      var query = location.query.s
      var pageNumber = this.state.pageNumber
      if(page == 'prev'){
        pageNumber--
      } else if(page == 'next') {
        pageNumber++
      } else {
        pageNumber = page
      }
      this.setState({ pageNumber: pageNumber}, function(){
        wpPosts.searchPosts(this, query, showPosts, pageNumber, loadMore)
      })
    }
  }

  render() {
    const { posts, activeSlug, totalPages, totalPosts, pageNumber } = this.state
    const { location } = this.props
    return (
      <Layout title="Search Page" headerMenu={this.props.headerMenu} activeSlug={activeSlug} location={location}>
        <h1>Search For <strong>{location.query.s}</strong></h1>
        <h5>{totalPosts} results found</h5>
        {posts.map(function(post){
          return (
            <div key={post.id}>
              <h2><Link to={helpers.stringReplace(post.link, 'http://l.wrs.com')}>{post.title.rendered}</Link></h2>
              <div dangerouslySetInnerHTML={{__html: post.content.rendered }} />
            </div>
          )}
        )}
        <PostsNavigation
          layout="loadMore"
          posts={posts}
          changePageNumber={this.changePageNumber}
          totalPages={totalPages}
          totalPosts={totalPosts}
          pageNumber={pageNumber}
        /> 
      </Layout>
    )
  }
}

export default SearchPage