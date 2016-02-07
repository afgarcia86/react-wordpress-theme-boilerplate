import React from 'react'
import autobind from 'autobind-decorator'
import DefaultLayout from './DefaultLayout'
import request from 'superagent'
import NotFound from './404'

@autobind
class Single extends React.Component{

	state = {
		postData : true
	}

  componentWillMount(){

  	var self = this;
  	request.get('/wp-json/wp/v2/posts?filter[name]='+this.props.params.slug).end(function(err, res){
  		if(err){
  			console.log(err)
  			return
  		}
  		var data = JSON.parse(res.text)
  		if(data.length){
	  		self.setState({
	  			postData : data[0]
	  		})
	  	} else {
	  		self.setState({
	  			postData : false
	  		})
	  	}
	  });

  }

  render() {

  	if(!this.state.postData){
  		return <NotFound />
  	} else if(this.state.postData.title){
	    return (
	       <DefaultLayout title={this.state.postData.title.rendered}>
	       	<h1>{this.state.postData.title.rendered}</h1>
	       	<div dangerouslySetInnerHTML={{__html: this.state.postData.content.rendered }} />      	
	      </DefaultLayout>
	    )
	  } else {
	  	return false
	  }
  }
}

export default Single