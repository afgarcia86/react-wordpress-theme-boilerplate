// Packages
import React from 'react'
import autobind from 'autobind-decorator'

// Functions
import helpers from '../lib/helpers'

// Views
import Layout from './Layout'
import NotFound from './NotFound'

@autobind
class Page extends React.Component{

  state = {
    postData : null,
    activeSlug : 'home'
  }

  componentWillMount(){
    if(this.props.pages.length){
      helpers.getDataWithSlug(this, this.props.pages, 'home')
    }
  }

  componentWillUpdate(nextProps, nextState){
    if(nextProps.pages != this.props.pages){
      helpers.getDataWithSlug(this, nextProps.pages, 'home')
    }
  }

  render() {
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
            <div dangerouslySetInnerHTML={{__html: postData.content.rendered }} />      
          </div>  
        )}
      </Layout>
    )
  }
}

export default Page