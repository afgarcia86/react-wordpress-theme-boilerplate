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
    page : null,
    notFound : false
  }

  componentWillMount(){
    var self = this     
    if(self.props.pages.length){
      self.getData(self.props.pages, this.props.params.slug, function(page){
        self.setState({
          page : page,
          notFound : false
        })
      })
    }
  }

  componentWillUpdate(nextProps, nextState){
    var self = this   
    if(nextProps.params.slug != self.props.params.slug || nextProps.pages != self.props.pages){
      self.getData(nextProps.pages, nextProps.params.slug, function(page){
        self.setState({
          page : page,
          notFound : false
        })
      })
    }
  }

  getData(pages, slug, callback){
    var self = this
    helpers.findBySlug(pages, slug, function(data){
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
    const { page, notFound } = this.state
    if(notFound){
      return (
        <NotFound />
      )
    }
    return (
      <Layout title={page ? page.title.rendered : ''}>
        {page && (
          <div>
            <h1>{page.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{__html: page.content.rendered }} />      
          </div>  
        )}
      </Layout>
    )
  }
}

export default Page