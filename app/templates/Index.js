// Packages
import React from 'react'
import autobind from 'autobind-decorator'

// Views
import Layout from './Layout'

@autobind
class Index extends React.Component{

  state = {
    posts : []
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
    const { posts } = this.state
    return (
      <Layout title="Index Page">
        {posts.map(function(post){
            return (
              <div key={post.id}>
                <h2>{post.title.rendered}</h2>
                <div dangerouslySetInnerHTML={{__html: post.content.rendered }} />     
              </div>
            )
          }
        )}
      </Layout>
    )
  }
}

export default Index