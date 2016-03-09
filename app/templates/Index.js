// Packages
import React from 'react'
import autobind from 'autobind-decorator'
import { Link } from 'react-router'

// Functions
import helpers from '../lib/helpers'

// Views
import Layout from './Layout'

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

  nextPage(){
    this.props.changePage('next', false)
  }

  prevPage(){
    this.props.changePage('prev', false)
  }

  loadMore(){
    this.props.changePage('next', true)
  }

  render() {
    const { posts, activeSlug } = this.state
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
        <button className="btn btn-primary" onClick={this.loadMore}>Load More</button>

        <button className="btn btn-primary" onClick={this.nextPage}>Next Page</button>

        <button className="btn btn-primary" onClick={this.prevPage}>Prev Page</button>
      </Layout>
    )
  }
}

export default Index