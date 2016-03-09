// Packages
import request from 'superagent'

module.exports = {
  getPages(obj, callback) {
    var url = '/wp-json/wp/v2/pages'
    return request.get(url).end(function(err, res){
      if(err){
        console.log(err)
        return
      }
      obj.setState({
        pages: res.body
      })
      if(callback) callback()
    })
  },
  getPage(obj, slug, callback) {
    var url = '/wp-json/wp/v2/pages?filter[name]='+slug
    return request.get(url).end(function(err, res){
      if(err){
        console.log(err)
        return
      }
      obj.setState({
        page: res.body
      })
      if(callback) callback()
    })
  }
}