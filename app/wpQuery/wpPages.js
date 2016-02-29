// Packages
import request from 'superagent'

module.exports = {
  getPages(callback) {
    var url = '/wp-json/wp/v2/pages'
    return request.get(url).end(function(err, res){
      if(err){
        console.log(err)
      } else {
        if(callback) callback(JSON.parse(res.text))
      }
    })
  },
  getPage(slug, callback) {
    var url = '/wp-json/wp/v2/pages?filter[name]='+slug
    return request.get(url).end(function(err, res){
      if(err){
        console.log(err)
      } else {
        if(callback) callback(JSON.parse(res.text))
      }
    })
  }
}