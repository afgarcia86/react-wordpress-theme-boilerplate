// Packages
import React from 'react'
import autobind from 'autobind-decorator'
import { Link } from 'react-router'

// Functions
import helpers from '../lib/helpers'

// Views
import Layout from './Layout'
import PostsNavigation from '../lib/PostsNavigation'

@autobind
class Index extends React.Component{

  state = {
    posts : [],
    activeSlug: 'blog'
  }

  componentWillMount(){
    var self = this     
    if(self.props.posts.length){
      self.setState({
        posts : self.props.posts
      })
    }
  }

  componentWillUpdate(nextProps, nextState){
    var self = this   
    if(nextProps.params.slug != self.props.params.slug || nextProps.posts != self.props.posts){
      self.setState({
        posts : nextProps.posts
      })
    }
  }

  render() {
    const { posts, activeSlug } = this.state
    const { totalPages, totalPosts, pageNumber, showPosts, changePage } = this.props
    return (
      <Layout title="Index Page" headerMenu={this.props.headerMenu} activeSlug={activeSlug}>
        <h1>Index Page</h1>
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
          changePage={changePage}
          totalPages={totalPages}
          totalPosts={totalPosts}
          pageNumber={pageNumber}
          showPosts={showPosts}
        /> 
      </Layout>
    )
  }
}

export default Index