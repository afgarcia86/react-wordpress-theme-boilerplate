// Packages
import React from 'react'
import autobind from 'autobind-decorator'

// Functions
import helpers from '../lib/helpers'

// Views
import Layout from './Layout'
import NotFound from './NotFound'

@autobind
class Single extends React.Component{

  static defaultProps = {
    title: 'Single'
  }

  state = {
    post : null,
    notFound : false
  }

  componentWillMount(){
    var self = this     
    if(self.props.posts.length){
      self.getData(self.props.posts, this.props.params.slug, function(post){
        self.setState({
          post : post,
          notFound : false
        })
      })
    }
  }

  componentWillUpdate(nextProps, nextState){
    var self = this   
    if(nextProps.params.slug != self.props.params.slug || nextProps.posts != self.props.posts){
      self.getData(nextProps.posts, nextProps.params.slug, function(post){
        self.setState({
          post : post,
          notFound : false
        })
      })
    }
  }

  getData(posts, slug, callback){
    var self = this
    helpers.findBySlug(posts, slug, function(data){
      if(!data){
        self.setState({
          notFound : true
        })
        return
      }
      if(callback) callback(data)
    }) 
  }

  render() {
    const { post, notFound } = this.state
    if(notFound){
      return (
        <NotFound />
      )
    }
    return (
      <Layout title={this.props.title}>
        {post && (
          <div>
           	<h1>{post.title.rendered}</h1>
           	<div dangerouslySetInnerHTML={{__html: post.content.rendered }} />    	
          </div>  
        )}
      </Layout>
    )
  }
}

export default Single