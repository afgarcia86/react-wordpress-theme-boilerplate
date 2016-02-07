import React from 'react'
import autobind from 'autobind-decorator'
import DefaultLayout from './DefaultLayout'
import request from 'superagent'
import NotFound from './404'

@autobind
class Page extends React.Component{

	state = {
		theTitle : '',
		theContent : '',
		notFound : false
	}

  componentDidMount(){

  	var self = this;
  	request.get('/wp-json/wp/v2/pages?filter[name]='+this.props.params.slug).end(function(err, res){
  		if(err){
  			console.log(err)
  			return
  		}
  		var data = JSON.parse(res.text)
  		if(data.length){
	  		self.setState({
	  			theTitle : data[0].title.rendered,
	  			theContent : data[0].content.rendered
	  		})
	  	} else {
	  		self.setState({
	  			notFound : true
	  		})	  		
	  	}
	  });

  }

  render() {
  	if(this.state.notFound){
  		return <NotFound />
  	}

    return (
      <DefaultLayout title={this.state.theTitle}>
       	<h1>{this.state.theTitle}</h1>
       	<div dangerouslySetInnerHTML={{__html: this.state.theContent }} />      	
      </DefaultLayout>
    )
  }
}

export default Page