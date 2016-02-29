// Packages
import React from 'react'
import autobind from 'autobind-decorator'
import moment from 'moment'

// Functions
import helpers from '../lib/helpers'

// Views
import Layout from './Layout'
import NotFound from './NotFound'

@autobind
class Single extends React.Component{

  state = {
    postData : null,
    activeSlug : 'blog'
  }

  componentWillMount(){
    if(this.props.posts.length){
      helpers.getDataWithSlug(this, this.props.posts, this.props.params.slug)
    }
  }

  componentWillUpdate(nextProps, nextState){
    if(nextProps.params.slug != this.props.params.slug || nextProps.posts != this.props.posts){
      helpers.getDataWithSlug(this, nextProps.posts, nextProps.params.slug)
    }
  }

  render() {
    const { users } = this.props
    const { postData, notFound, activeSlug } = this.state
    if(notFound){
      return (
        <NotFound />
      )
    }
    return (
      <Layout title={postData ? postData.title.rendered : ''} headerMenu={this.props.headerMenu} activeSlug={activeSlug}>
        {postData && (
          <div>
           	<h1>{postData.title.rendered}</h1>
            <p>Posted {moment(postData.date).format('LL')} by {helpers.getUser(users, postData.author)}</p>
           	<div dangerouslySetInnerHTML={{__html: postData.content.rendered }} />    	
          </div>  
        )}
      </Layout>
    )
  }
}

export default Single